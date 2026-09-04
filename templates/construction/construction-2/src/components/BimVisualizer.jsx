import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function BimVisualizer({ addToast }) {
  const mountRef = useRef(null);
  const [layers, setLayers] = useState({
    steel: true,
    concrete: true,
    glass: true,
    lights: true
  });
  const [lightingMode, setLightingMode] = useState('day');
  const [webglSupported, setWebglSupported] = useState(true);

  // Three.js internal refs
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const buildingGroupRef = useRef(null);
  const steelMeshRef = useRef(null);
  const concreteMeshRef = useRef(null);
  const glassMeshRef = useRef(null);
  const lightNodesRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer;
    let animId;
    let observer;

    try {
      const width = container.clientWidth || 600;
      const height = container.clientHeight || 500;

      // Scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(18, 14, 24);
      camera.lookAt(0, 4, 0);
      cameraRef.current = camera;

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'default' });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      
      const existingCanvas = container.querySelector('canvas');
      if (existingCanvas) existingCanvas.remove();
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xe5a93c, 1.5);
      dirLight.position.set(20, 30, 15);
      scene.add(dirLight);

      const blueLight = new THREE.PointLight(0x00f0ff, 2, 40);
      blueLight.position.set(-15, 10, -10);
      scene.add(blueLight);

      // Building Group
      const buildingGroup = new THREE.Group();
      scene.add(buildingGroup);
      buildingGroupRef.current = buildingGroup;

      // 1. Concrete Slabs (Levels)
      const concreteGroup = new THREE.Group();
      const slabMaterial = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        roughness: 0.4,
        metalness: 0.2
      });
      for (let i = 0; i < 7; i++) {
        const slabGeo = new THREE.BoxGeometry(10, 0.4, 8);
        const slab = new THREE.Mesh(slabGeo, slabMaterial);
        slab.position.y = i * 2.2;
        concreteGroup.add(slab);
      }
      buildingGroup.add(concreteGroup);
      concreteMeshRef.current = concreteGroup;

      // 2. Steel Columns
      const steelGroup = new THREE.Group();
      const steelMaterial = new THREE.MeshStandardMaterial({
        color: 0xe5a93c,
        metalness: 0.8,
        roughness: 0.2
      });
      const colCoords = [
        [-4.5, -3.5], [4.5, -3.5], [-4.5, 3.5], [4.5, 3.5],
        [0, -3.5], [0, 3.5], [-4.5, 0], [4.5, 0]
      ];
      colCoords.forEach(([cx, cz]) => {
        const colGeo = new THREE.CylinderGeometry(0.15, 0.15, 14, 8);
        const col = new THREE.Mesh(colGeo, steelMaterial);
        col.position.set(cx, 6.5, cz);
        steelGroup.add(col);
      });
      buildingGroup.add(steelGroup);
      steelMeshRef.current = steelGroup;

      // 3. Glass Panels
      const glassGroup = new THREE.Group();
      const glassMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.35,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.6,
        ior: 1.5
      });
      for (let i = 0; i < 6; i++) {
        const glassGeo = new THREE.BoxGeometry(9.6, 1.8, 7.6);
        const glass = new THREE.Mesh(glassGeo, glassMaterial);
        glass.position.y = i * 2.2 + 1.1;
        glassGroup.add(glass);
      }
      buildingGroup.add(glassGroup);
      glassMeshRef.current = glassGroup;

      // 4. Interior LED Nodes
      const lightGroup = new THREE.Group();
      const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffd166 });
      for (let i = 0; i < 6; i++) {
        const nodeGeo = new THREE.SphereGeometry(0.18, 8, 8);
        const node1 = new THREE.Mesh(nodeGeo, nodeMaterial);
        node1.position.set(-2, i * 2.2 + 1.1, 0);
        const node2 = new THREE.Mesh(nodeGeo, nodeMaterial);
        node2.position.set(2, i * 2.2 + 1.1, 1);
        lightGroup.add(node1);
        lightGroup.add(node2);
      }
      buildingGroup.add(lightGroup);
      lightNodesRef.current = lightGroup;

      // Ground Grid Helper
      const gridHelper = new THREE.GridHelper(30, 20, 0xe5a93c, 0x1e293b);
      gridHelper.position.y = -0.2;
      scene.add(gridHelper);

      // Mouse & Touch Orbit Controls
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      const onMouseDown = (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const onMouseMove = (e) => {
        if (!isDragging) return;
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;
        buildingGroup.rotation.y += deltaX * 0.008;
        buildingGroup.rotation.x += deltaY * 0.005;
        previousMousePosition = { x: e.clientX, y: e.clientY };
      };

      const onMouseUp = () => {
        isDragging = false;
      };

      const onTouchStart = (e) => {
        if (e.touches.length === 1) {
          isDragging = true;
          previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
      };

      const onTouchMove = (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        buildingGroup.rotation.y += deltaX * 0.008;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      };

      const onTouchEnd = () => {
        isDragging = false;
      };

      container.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      container.addEventListener('touchstart', onTouchStart);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);

      let isVisible = true;
      observer = new IntersectionObserver(
        ([entry]) => {
          isVisible = entry.isIntersecting;
        },
        { threshold: 0.1 }
      );
      observer.observe(container);

      const animate = () => {
        animId = requestAnimationFrame(animate);
        if (isVisible && rendererRef.current && sceneRef.current && cameraRef.current) {
          if (!isDragging && buildingGroupRef.current) {
            buildingGroupRef.current.rotation.y += 0.003;
          }
          renderer.render(scene, camera);
        }
      };
      animate();

      const handleResize = () => {
        if (!container || !cameraRef.current || !rendererRef.current) return;
        const w = container.clientWidth || 600;
        const h = container.clientHeight || 500;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      };
      window.addEventListener('resize', handleResize);

      return () => {
        if (animId) cancelAnimationFrame(animId);
        if (observer) observer.disconnect();
        window.removeEventListener('resize', handleResize);
        container.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
        if (renderer) renderer.dispose();
      };
    } catch (err) {
      console.warn('Three.js / WebGL initialization notice:', err);
      setWebglSupported(false);
    }
  }, []);

  const toggleLayer = (layerKey, label) => {
    setLayers(prev => {
      const nextState = !prev[layerKey];
      if (layerKey === 'steel' && steelMeshRef.current) steelMeshRef.current.visible = nextState;
      if (layerKey === 'concrete' && concreteMeshRef.current) concreteMeshRef.current.visible = nextState;
      if (layerKey === 'glass' && glassMeshRef.current) glassMeshRef.current.visible = nextState;
      if (layerKey === 'lights' && lightNodesRef.current) lightNodesRef.current.visible = nextState;

      if (addToast) addToast(`${label}: ${nextState ? 'VISIBLE / ON' : 'HIDDEN / OFF'}`);
      return { ...prev, [layerKey]: nextState };
    });
  };

  const handleLighting = (mode) => {
    setLightingMode(mode);
    if (!rendererRef.current) return;

    if (mode === 'day') {
      rendererRef.current.setClearColor(0x0e182e, 0.3);
      if (addToast) addToast('Simulated: Daylight Sun (6500K Ambient)');
    } else if (mode === 'sunset') {
      rendererRef.current.setClearColor(0x2d170a, 0.7);
      if (addToast) addToast('Simulated: Golden Hour Sunset (2800K Warm)');
    } else if (mode === 'night') {
      rendererRef.current.setClearColor(0x03060c, 0.95);
      if (addToast) addToast('Simulated: Night Architectural LED Mode');
    }
  };

  return (
    <section className="bim-visualizer-section" id="bim3d">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>INTERACTIVE 3D BIM TECHNOLOGY</div>
          <h2 className="section-title">REAL-TIME 3D DIGITAL TWIN VISUALIZER</h2>
          <p className="section-desc" style={{ margin: '12px auto 0 auto' }}>
            Drag to orbit around our procedural architectural BIM model in 3D. Toggle structural steel frames, concrete slabs, glass curtain walls, and interior lighting live.
          </p>
        </div>

        <div className="bim-wrapper">
          {/* 3D WebGL Canvas */}
          <div className="bim-canvas-container" ref={mountRef} style={{ position: 'relative', minHeight: '480px' }}>
            <div className="bim-hud-badge">
              <span className="bim-hud-pulse"></span>
              <span>3D BIM LEVEL 3 • MOUSE DRAG TO ROTATE</span>
            </div>

            {!webglSupported && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                textAlign: 'center',
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                color: '#f8fafc',
                borderRadius: '12px'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🏗️</div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e5a93c', marginBottom: '8px' }}>
                  BIM Digital Twin Active
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', maxWidth: '380px', lineHeight: 1.6 }}>
                  Level 3 structural modeling configured with 7-level concrete slabs, reinforced columns, and double-glazed curtain walls.
                </p>
              </div>
            )}
          </div>

          {/* 3D Controls Panel */}
          <div className="bim-controls-panel">
            <div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', color: 'white', marginBottom: '6px' }}>
                BIM Structural Layers
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginBottom: '20px' }}>
                Isolate key civil and architectural systems in real time:
              </p>

              <div 
                className={`bim-layer-toggle ${layers.steel ? 'active' : ''}`}
                onClick={() => toggleLayer('steel', 'Steel Structural Columns')}
                style={{ cursor: 'pointer' }}
              >
                <span>🏗️ Steel Structural Columns</span>
                <span className="gold-text">{layers.steel ? 'VISIBLE' : 'HIDDEN'}</span>
              </div>

              <div 
                className={`bim-layer-toggle ${layers.concrete ? 'active' : ''}`}
                onClick={() => toggleLayer('concrete', 'Concrete Floor Slabs')}
                style={{ cursor: 'pointer' }}
              >
                <span>🏢 Concrete Floor Slabs (7 Levels)</span>
                <span className="gold-text">{layers.concrete ? 'VISIBLE' : 'HIDDEN'}</span>
              </div>

              <div 
                className={`bim-layer-toggle ${layers.glass ? 'active' : ''}`}
                onClick={() => toggleLayer('glass', 'Double-Glazed Glass Curtains')}
                style={{ cursor: 'pointer' }}
              >
                <span>🪟 Double-Glazed Glass Curtains</span>
                <span className="gold-text">{layers.glass ? 'VISIBLE' : 'HIDDEN'}</span>
              </div>

              <div 
                className={`bim-layer-toggle ${layers.lights ? 'active' : ''}`}
                onClick={() => toggleLayer('lights', 'Interior Lighting & BMS')}
                style={{ cursor: 'pointer' }}
              >
                <span>💡 Interior Lighting & BMS Nodes</span>
                <span className="gold-text">{layers.lights ? 'ON' : 'OFF'}</span>
              </div>
            </div>

            {/* 3D Lighting Environment Simulator */}
            <div className="lighting-sim-box">
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#cbd5e1', textTransform: 'uppercase' }}>
                3D Lighting Environment Simulation
              </span>
              <div className="sim-btns-grid">
                <button 
                  className={`sim-btn ${lightingMode === 'day' ? 'active' : ''}`}
                  onClick={() => handleLighting('day')}
                >
                  ☀️ Day Sun
                </button>
                <button 
                  className={`sim-btn ${lightingMode === 'sunset' ? 'active' : ''}`}
                  onClick={() => handleLighting('sunset')}
                >
                  🌅 Sunset
                </button>
                <button 
                  className={`sim-btn ${lightingMode === 'night' ? 'active' : ''}`}
                  onClick={() => handleLighting('night')}
                >
                  🌙 Night LED
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
