import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/* Shared GLSL: Ashima simplex noise 3D                                */
/* ------------------------------------------------------------------ */
const SNOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

/* ------------------------------------------------------------------ */
/* Hero — strong: noise-displaced knot with fresnel rim                */
/* ------------------------------------------------------------------ */
const HERO_VERT = /* glsl */ `
uniform float uTime; uniform float uAmp; uniform float uFreq;
varying float vNoise; varying vec3 vNormal; varying vec3 vView;
${SNOISE}
void main(){
  vec3 pos = position;
  float n = snoise(pos*uFreq + uTime*0.25);
  pos += normal * n * uAmp;
  vNoise = n;
  vec4 mv = modelViewMatrix * vec4(pos,1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;

const HERO_FRAG = /* glsl */ `
varying float vNoise; varying vec3 vNormal; varying vec3 vView;
void main(){
  float fres = pow(1.0 - max(dot(normalize(vNormal),normalize(vView)),0.0), 2.2);
  float lam = max(dot(normalize(vNormal), normalize(vec3(0.5,0.8,0.6))), 0.0);
  vec3 cream = vec3(0.972,0.956,0.925);
  vec3 coral = vec3(0.910,0.435,0.318);
  vec3 lav   = vec3(0.784,0.714,1.000);
  vec3 base = mix(cream, lav, smoothstep(-0.6,0.8,vNoise));
  base = mix(base, coral, smoothstep(0.15,0.9,fres + vNoise*0.35));
  base *= 0.82 + 0.30*lam;
  gl_FragColor = vec4(base, 1.0);
}`;

function HeroRibbon() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAmp: { value: 0.32 },
      uFreq: { value: 1.15 },
    }),
    [],
  );

  useFrame((_, delta) => {
    if (matRef.current) matRef.current.uniforms.uTime.value += delta;
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.16;
      meshRef.current.rotation.z = Math.sin(performance.now() * 0.00012) * 0.18;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0.5, 0, 0]}>
      <torusKnotGeometry args={[1.02, 0.36, 240, 36]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={HERO_VERT}
        fragmentShader={HERO_FRAG}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, 4.6], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <HeroRibbon />
    </Canvas>
  );
}

export function FloatScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    groupRef.current?.children.forEach((child, i) => {
      child.position.y = Math.sin(t * (0.5 + i * 0.11) + i * 1.7) * 0.22;
      child.rotation.x += 0.0016 * (1 + i * 0.2);
      child.rotation.y += 0.0022;
    });
  });

  return (
    <group ref={groupRef}>
      <FloatMesh position={[-1.7, 0.3, -0.4]} kind="ico" color="#E86F51" scale={0.62} />
      <FloatMesh position={[1.55, -0.25, -0.2]} kind="sphere" color="#C8B6FF" scale={0.78} />
      <FloatMesh position={[0.15, 0.75, -0.9]} kind="torus" color="#F1D8CF" scale={0.5} />
      <FloatMesh position={[0.4, -0.8, -0.5]} kind="sphere" color="#E8E1F4" scale={0.44} />
      <FloatMesh position={[-0.9, -0.45, 0.1]} kind="ico" color="#F1D8CF" scale={0.34} />
    </group>
  );
}

function FloatMesh({
  position,
  kind,
  color,
  scale,
}: {
  position: [number, number, number];
  kind: "ico" | "sphere" | "torus";
  color: string;
  scale: number;
}) {
  return (
    <mesh position={position} scale={scale}>
      {kind === "ico" && <icosahedronGeometry args={[1, 0]} />}
      {kind === "sphere" && <sphereGeometry args={[1, 40, 40]} />}
      {kind === "torus" && <torusGeometry args={[0.8, 0.3, 20, 48]} />}
      <meshStandardMaterial color={color} roughness={0.38} metalness={0.04} flatShading={kind === "ico"} />
    </mesh>
  );
}

export function FloatCanvas() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.4], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <ambientLight intensity={1.05} />
      <directionalLight position={[3, 4, 5]} intensity={1.15} />
      <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#C8B6FF" />
      <FloatScene />
    </Canvas>
  );
}

/* ------------------------------------------------------------------ */
/* Process — moderate: four rings advance with scroll progress         */
/* ------------------------------------------------------------------ */
interface ProcessProps {
  progressRef: React.MutableRefObject<number>;
}

const RING_COLORS = ["#E86F51", "#C8B6FF", "#F1D8CF", "#181818"];

export function ProcessScene({ progressRef }: ProcessProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    const p = THREE.MathUtils.clamp(progressRef.current, 0, 0.9999);
    const active = Math.floor(p * 4);
    groupRef.current?.children.forEach((ring, i) => {
      const target = i === active ? 1 : 0.62 + Math.abs(active - i) * -0.06;
      ring.scale.setScalar(THREE.MathUtils.lerp(ring.scale.x, Math.max(target, 0.5), 0.08));
      ring.rotation.z += (i === active ? 0.006 : 0.0015) * (i % 2 ? -1 : 1);
      ring.position.z = THREE.MathUtils.lerp(ring.position.z, i === active ? 0.35 : 0, 0.08);
    });
  });

  return (
    <group ref={groupRef}>
      {[1.35, 1.05, 0.78, 0.52].map((r, i) => (
        <mesh key={r} rotation={[1.1 + i * 0.22, i * 0.5, 0]}>
          <torusGeometry args={[r, 0.075, 24, 90]} />
          <meshStandardMaterial
            color={RING_COLORS[i]}
            roughness={0.35}
            metalness={i === 3 ? 0.35 : 0.05}
          />
        </mesh>
      ))}
    </group>
  );
}

export function ProcessCanvas({ progressRef }: ProcessProps) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <ambientLight intensity={1.1} />
      <directionalLight position={[2.5, 3.5, 4]} intensity={1.2} />
      <directionalLight position={[-3, -2, -2]} intensity={0.45} color="#C8B6FF" />
      <ProcessScene progressRef={progressRef} />
    </Canvas>
  );
}

/* ------------------------------------------------------------------ */
/* CTA — subtle: breathing orb with coral rim                          */
/* ------------------------------------------------------------------ */
const ORB_VERT = /* glsl */ `
uniform float uTime;
varying vec3 vNormal; varying vec3 vView;
${SNOISE}
void main(){
  vec3 pos = position + normal * snoise(position*1.6 + uTime*0.35) * 0.09;
  vec4 mv = modelViewMatrix * vec4(pos,1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;

const ORB_FRAG = /* glsl */ `
varying vec3 vNormal; varying vec3 vView;
void main(){
  float fres = pow(1.0 - max(dot(normalize(vNormal),normalize(vView)),0.0), 2.4);
  float lam = max(dot(normalize(vNormal), normalize(vec3(0.4,0.9,0.5))), 0.0);
  vec3 col = mix(vec3(0.972,0.956,0.925), vec3(0.910,0.435,0.318), fres*0.9);
  col *= 0.88 + 0.25*lam;
  gl_FragColor = vec4(col,1.0);
}`;

export function CtaOrb() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame(({ clock }, delta) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = clock.elapsedTime;
    if (meshRef.current) {
      const breathe = 1 + Math.sin(clock.elapsedTime * 0.8) * 0.03;
      meshRef.current.scale.setScalar(breathe);
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.15, 96, 96]} />
      <shaderMaterial ref={matRef} vertexShader={ORB_VERT} fragmentShader={ORB_FRAG} uniforms={uniforms} />
    </mesh>
  );
}

export function CtaCanvas() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 3.6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
      aria-hidden="true"
    >
      <CtaOrb />
    </Canvas>
  );
}
