import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SKILLS_DATA } from '../data/skills';
import { SkillNode, CursorState } from '../types';
import { isWebGLAvailable } from '../utils/webgl';

interface SkillGalaxySceneProps {
  selectedSkill: SkillNode | null;
  onSelectSkill: (skill: SkillNode) => void;
  setCursorState: (state: CursorState) => void;
  onHoverSound: () => void;
  onNeuralSound: () => void;
}

export const SkillGalaxyScene: React.FC<SkillGalaxySceneProps> = ({
  selectedSkill,
  onSelectSkill,
  setCursorState,
  onHoverSound,
  onNeuralSound,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const nodeMeshesRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const linesGroupRef = useRef<THREE.Group | null>(null);
  const reqIdRef = useRef<number | null>(null);

  // Drag rotation state
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!isWebGLAvailable()) return;
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(renderer.domElement);

    // Lighting
    const ambient = new THREE.AmbientLight(0x0f172a, 2.5);
    scene.add(ambient);

    const pointLight = new THREE.PointLight(0x06b6d4, 4, 15);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const group = new THREE.Group();
    groupRef.current = group;
    scene.add(group);

    // Center Node: "AI / ML Core"
    const centerGeo = new THREE.SphereGeometry(0.55, 32, 32);
    const centerMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0284c7,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    group.add(centerMesh);

    // Center wireframe pulse ring
    const centerRingGeo = new THREE.TorusGeometry(0.8, 0.02, 16, 64);
    const centerRingMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
    });
    const centerRing = new THREE.Mesh(centerRingGeo, centerRingMat);
    group.add(centerRing);

    // Skill Nodes
    const nodeMap = new Map<string, THREE.Mesh>();
    SKILLS_DATA.forEach((skill) => {
      const size = 0.22 + (skill.level / 100) * 0.15;
      const nodeGeo = new THREE.IcosahedronGeometry(size, 2);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(skill.color),
        emissive: new THREE.Color(skill.color),
        emissiveIntensity: 0.35,
        roughness: 0.2,
        metalness: 0.8,
      });
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      mesh.position.set(...skill.position);
      mesh.userData = { skillId: skill.id, skillData: skill };

      group.add(mesh);
      nodeMap.set(skill.id, mesh);
    });
    nodeMeshesRef.current = nodeMap;

    // Synaptic Neural Connection Lines
    const linesGroup = new THREE.Group();
    linesGroupRef.current = linesGroup;
    group.add(linesGroup);

    const drawnPairs = new Set<string>();

    SKILLS_DATA.forEach((skill) => {
      // Connect each to center nucleus
      const centerLineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(...skill.position),
      ]);
      const centerLineMat = new THREE.LineBasicMaterial({
        color: 0x0284c7,
        transparent: true,
        opacity: 0.2,
      });
      const centerLine = new THREE.Line(centerLineGeo, centerLineMat);
      linesGroup.add(centerLine);

      // Connect to inter-related skills
      skill.connections.forEach((targetId) => {
        const pairKey = [skill.id, targetId].sort().join('-');
        if (!drawnPairs.has(pairKey)) {
          drawnPairs.add(pairKey);
          const targetSkill = SKILLS_DATA.find((s) => s.id === targetId);
          if (targetSkill) {
            const lineGeo = new THREE.BufferGeometry().setFromPoints([
              new THREE.Vector3(...skill.position),
              new THREE.Vector3(...targetSkill.position),
            ]);
            const lineMat = new THREE.LineBasicMaterial({
              color: 0x38bdf8,
              transparent: true,
              opacity: 0.25,
            });
            const line = new THREE.Line(lineGeo, lineMat);
            line.userData = { source: skill.id, target: targetId };
            linesGroup.add(line);
          }
        }
      });
    });

    // Background Dust Particles
    const dustCount = 400;
    const dustGeo = new THREE.BufferGeometry();
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 12;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      size: 0.03,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.4,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    group.add(dust);

    // Raycasting for Mouse Interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handlePointerMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      // Check hover
      raycaster.setFromCamera(mouse, camera);
      const meshes = Array.from(nodeMap.values());
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const skill = hitMesh.userData.skillData as SkillNode;
        if (skill && hoveredNodeId !== skill.id) {
          setHoveredNodeId(skill.id);
          onHoverSound();
          setCursorState({ variant: 'interact', text: skill.name });
        }
      } else {
        if (hoveredNodeId !== null) {
          setHoveredNodeId(null);
          setCursorState({ variant: 'default', text: '' });
        }
      }

      // Drag Orbiting
      if (isDraggingRef.current && groupRef.current) {
        const deltaX = e.clientX - previousMousePositionRef.current.x;
        const deltaY = e.clientY - previousMousePositionRef.current.y;
        groupRef.current.rotation.y += deltaX * 0.005;
        groupRef.current.rotation.x += deltaY * 0.005;
      }
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };

      // Click node check
      raycaster.setFromCamera(mouse, camera);
      const meshes = Array.from(nodeMap.values());
      const intersects = raycaster.intersectObjects(meshes);

      if (intersects.length > 0) {
        const hitMesh = intersects[0].object as THREE.Mesh;
        const skill = hitMesh.userData.skillData as SkillNode;
        if (skill) {
          onSelectSkill(skill);
          onNeuralSound();
        }
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousemove', handlePointerMove);
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Render Loop
    let clock = new THREE.Clock();
    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow idle orbit when not dragged
      if (groupRef.current && !isDraggingRef.current) {
        groupRef.current.rotation.y += 0.002;
        groupRef.current.rotation.x = Math.sin(elapsed * 0.2) * 0.08;
      }

      centerRing.rotation.z = elapsed * 0.5;
      centerRing.rotation.x = elapsed * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      domElement.removeEventListener('mousemove', handlePointerMove);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      renderer.dispose();
    };
  }, []);

  // Update Visual Highlights when Hovered or Selected
  useEffect(() => {
    const targetId = hoveredNodeId || selectedSkill?.id;
    if (!targetId) {
      nodeMeshesRef.current.forEach((mesh) => {
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = 0.35;
        mesh.scale.set(1, 1, 1);
      });
      if (linesGroupRef.current) {
        linesGroupRef.current.children.forEach((l) => {
          const line = l as THREE.Line;
          (line.material as THREE.LineBasicMaterial).opacity = 0.25;
          (line.material as THREE.LineBasicMaterial).color.setHex(0x38bdf8);
        });
      }
      return;
    }

    const activeNode = SKILLS_DATA.find((s) => s.id === targetId);
    if (!activeNode) return;

    nodeMeshesRef.current.forEach((mesh, id) => {
      const mat = mesh.material as THREE.MeshStandardMaterial;
      if (id === targetId) {
        mat.emissiveIntensity = 1.0;
        mesh.scale.set(1.4, 1.4, 1.4);
      } else if (activeNode.connections.includes(id)) {
        mat.emissiveIntensity = 0.8;
        mesh.scale.set(1.2, 1.2, 1.2);
      } else {
        mat.emissiveIntensity = 0.15;
        mesh.scale.set(0.85, 0.85, 0.85);
      }
    });

    if (linesGroupRef.current) {
      linesGroupRef.current.children.forEach((l) => {
        const line = l as THREE.Line;
        const src = line.userData?.source;
        const tgt = line.userData?.target;

        if (src === targetId || tgt === targetId) {
          (line.material as THREE.LineBasicMaterial).opacity = 0.9;
          (line.material as THREE.LineBasicMaterial).color.setHex(0x22d3ee);
        } else {
          (line.material as THREE.LineBasicMaterial).opacity = 0.08;
        }
      });
    }
  }, [hoveredNodeId, selectedSkill]);

  return (
    <div
      ref={containerRef}
      id="skill-galaxy-canvas-container"
      className="w-full h-full min-h-[440px] md:min-h-[580px] relative rounded-2xl overflow-hidden glass-panel border border-slate-800"
    >
      <div className="absolute top-4 left-4 z-10 pointer-events-none flex flex-col space-y-1">
        <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase">
          // NEURAL GALAXY TOPOLOGY
        </span>
        <span className="text-xs text-slate-400 font-sans">
          Click or hover nodes to inspect synaptic pathways
        </span>
      </div>

      <div className="absolute bottom-4 right-4 z-10 pointer-events-none text-right font-mono text-[10px] text-slate-500">
        DRAG TO ROTATE CONSTELLATION
      </div>
    </div>
  );
};
