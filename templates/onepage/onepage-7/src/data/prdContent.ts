import { PRDSection } from '../types';

export const PRD_METADATA = {
  title: "Fonix One-Page 3D Experience — Product Requirements Document (PRD)",
  version: "1.0.0-PROD",
  author: "Design Systems & WebGL Architecture Team",
  targetStudio: "AI Studio Engineering & Creative Collective",
  status: "Approved for Build",
  targetDate: "Q3 2026",
  brandName: "fonix",
  tagline: "Sonic Spatial Intelligence & Next-Generation Acoustic Architecture",
};

export const PRD_SECTIONS: PRDSection[] = [
  {
    id: "executive-summary",
    title: "1. Executive Summary & Project Brief",
    badge: "Strategic Overview",
    audience: "all",
    summary: "High-level overview of the Fonix one-page 3D immersive web experience, brand positioning, and the primary creative imperative.",
    content: [
      {
        heading: "1.1 Product Mission & Brand Concept",
        paragraphs: [
          "Fonix is pioneering the next paradigm in acoustic intelligence, spatial sound synthesis, and real-time audio visualization. The goal of this one-page digital experience is not merely to display a static 3D model, but to transform the browser window into a living acoustic-kinetic environment.",
          "The website must convey precision engineering fused with ethereal auditory aesthetics. Visitors should immediately perceive Fonix as a category-defining brand operating at the intersection of high-fidelity acoustics, computational geometry, and visceral physical computing."
        ],
        bulletPoints: [
          { title: "Core Aesthetic Benchmark", desc: "A museum-grade digital kinetic sculpture where 3D geometry responds organically to audio harmonics, user scrolling, and micro-cursor interactions." },
          { title: "Primary Conversion Goal", desc: "Guide users through an intuitive visual journey that establishes technological authority and drives developer / enterprise early-access inquiries." },
          { title: "Non-Derivative Mandate", desc: "Avoid generic WebGL tropes (floating purple spheres, repetitive card grids, canned camera pans). Every 3D movement must embody Fonix's acoustic physics." }
        ]
      }
    ]
  },
  {
    id: "visual-direction",
    title: "2. Visual Direction & 3D Aesthetics",
    badge: "Visual & 3D Art",
    audience: "3d-artists",
    summary: "Exact specifications for material shaders, optical qualities, lighting setups, color systems, typography pairings, and spatial asset definitions.",
    content: [
      {
        heading: "2.1 Material Qualities: The Dual-State Translucent Core",
        paragraphs: [
          "The visual language of Fonix relies on a juxtaposition of two fundamental material states: 'Acoustic Glass' (an ultra-high purity, refractive, frosted optical medium) and 'Liquid Mercury Lattice' (a mirror-polished, non-Newtonian fluid metal core).",
          "Unlike generic translucent plastic or standard glassmorphism, the Fonix material incorporates real-time chromatic dispersion (Abbe number approximation), dynamic internal caustics, and subtle fresnel rim luminescence that flares subtly during high harmonic activity."
        ],
        specs: [
          { label: "Refractive Index (IOR)", value: "1.48 - 1.54", note: "Simulating heavy optical flint glass with edge chromatic separation" },
          { label: "Surface Roughness", value: "0.08 - 0.18", note: "Subtly frosted micro-facet roughness preserving specular clarity" },
          { label: "Transmission & Depth", value: "0.92 transmission, 1.25 depth", note: "Allows internal liquid chrome matrix to be refracted from within" },
          { label: "Specular Dispersion", value: "3-channel RGB offset (2.4nm)", note: "Prismatic color fringing on grazing angles without blur" }
        ],
        callout: {
          type: "highlight",
          text: "Design Principle: 3D materials must feel cold to the touch, heavy with optical density, yet fluidly alive in response to acoustic vibrations."
        }
      },
      {
        heading: "2.2 Lighting Architecture & Color Palette",
        paragraphs: [
          "The scene is illuminated using a three-point architectural lighting rig paired with an ambient HDR environment map tuned to deep celestial indigo and warm titanium amber.",
          "High-contrast directional key lights slice across the geometric facets, casting sharp caustic glints that sweep as the user scrolls, while a subtle cool fill light preserves typography legibility across all viewport breakpoints."
        ],
        bulletPoints: [
          { title: "Void Obsidian (#0B0D11)", desc: "Primary canvas background; deep, neutral near-black that absorbs glare and creates infinite negative depth." },
          { title: "Prismatic Luminescence (#5EEAD4 & #818CF8)", desc: "Refractive highlights that bloom on crests of kinetic soundwaves." },
          { title: "Liquid Platinum (#E2E8F0)", desc: "Specular gleams and internal core geometry reflecting high-frequency highlights." },
          { title: "Warm Titanium Accent (#F59E0B)", desc: "Reserved strictly for acoustic activation nodes, real-time metrics, and conversion triggers." }
        ]
      },
      {
        heading: "2.3 Hero 3D Asset: The 'Resonating Acoustic Monolith'",
        paragraphs: [
          "The centerpiece of the landing experience is the 'Fonix Kinetic Core' — an interconnected geometric sculpture composed of an outer icosahedral frosted crystal cage housing a continuously deforming liquid soundwave sphere.",
          "When idle, it breathes with low-frequency rotational inertia. As the user moves the cursor or activates sound modes, the inner sphere pulses with harmonic sinusoidal displacement, sending ripples through the outer refractive crystalline shell."
        ]
      },
      {
        heading: "2.4 Secondary 3D Elements & Atmospheric Particles",
        paragraphs: [
          "Secondary 3D assets are positioned along the scroll narrative to anchor specific product pillars without cluttering the viewport.",
          "These include: (1) Orbital Gyroscopic Wave Rings on the Feature matrix, (2) Refractive Glass Acoustic Nodes in the Architecture section, and (3) A particulate field of 2,400 floating sonic photons that react to mouse turbulence."
        ]
      }
    ]
  },
  {
    id: "motion-interaction",
    title: "3. Motion & Interaction Philosophy",
    badge: "Choreography & UX",
    audience: "designers",
    summary: "Detailed movement signatures, spring physics, scroll choreography, and tactile interaction models that differentiate Fonix from standard web animations.",
    content: [
      {
        heading: "3.1 Movement Philosophy: Viscoelastic Mechanical Fluidity",
        paragraphs: [
          "Fonix motion rejects generic linear tweens and snappy bouncy springs. Instead, all movement adheres to a 'Viscoelastic Fluidity' model: actions have physical mass, high initial resistance, frictionless velocity, and soft asymptotic settling.",
          "Motion communicates acoustic resonance — every interactive element behaves as if connected by invisible acoustic springs with dampening ratios calibrated to 432Hz harmonic frequencies."
        ],
        bulletPoints: [
          { title: "Hero Entry Signature", desc: "Rather than a slide-up fade, the 3D Core implodes from a dispersed cloud of sonic light points, crystallizing into the solid refractive monolith over 1.4s with high-inertia camera zoom." },
          { title: "Continuous Spatial Thread", desc: "The 3D canvas is NOT destroyed or reloaded across sections. It acts as a continuous background viewport that rotates, scales, and morphs its geometry in sync with the user's scroll progress." },
          { title: "Magnetic Parallax Field", desc: "Cursor movement applies a dual-layered torque: the outer crystal rotates with a 0.05 lag factor, while the internal liquid core shifts oppositely with a 0.08 lag factor, creating tangible volumetric depth." }
        ]
      },
      {
        heading: "3.2 Scroll-Triggered Morphing Choreography",
        paragraphs: [
          "As the visitor scrolls down the single-page experience, the central 3D scene undergoes five distinct mathematical transformations:"
        ],
        specs: [
          { label: "0% - 20% (Hero)", value: "Monolith State", note: "Intact crystalline cage with slow gyroscopic rotation and mouse tilt tracking" },
          { label: "20% - 45% (Architecture)", value: "Exploded Core", note: "Outer facets separate outward along normals, revealing the inner multi-layered sound engine" },
          { label: "45% - 70% (Harmonics)", value: "Waveform Ribbon", note: "Geometry collapses into an elongated dynamic sinusoidal ribbon undulating in 3D space" },
          { label: "70% - 85% (Interactive Lab)", value: "Orbital Matrix", note: "Transforms into an interactive particle cluster responding to real-time frequency knobs" },
          { label: "85% - 100% (CTA)", value: "Quantum Singularity", note: "High-density luminescent sphere drawing in ambient energy, focusing viewer gaze onto the CTA" }
        ]
      }
    ]
  },
  {
    id: "page-structure",
    title: "4. Page Structure & Section-by-Section Blueprint",
    badge: "Information Architecture",
    audience: "all",
    summary: "Comprehensive layout flow mapping copy, UI components, and the precise synchronized 3D behaviors across all 7 narrative stages.",
    content: [
      {
        heading: "4.1 Narrative Progression",
        paragraphs: [
          "The one-page layout is organized as an escalating technical demonstration, transitioning from visceral visual impact to technical architecture, interactive proof, and enterprise partnership initiation."
        ],
        bulletPoints: [
          {
            title: "Section 1: Hero — The Sonic Monolith",
            desc: "Full viewport frame with oversized display typography ('Redefining the Spatial Audio Continuum'), brand badge, live audio-reactive 3D hero asset, primary CTA ('Explore Sound Engine'), and scroll indicator."
          },
          {
            title: "Section 2: The Core Architecture — 3D Exploded Engine",
            desc: "Split layout where scrolling explodes the 3D monolith to expose 3 distinct architectural layers: Neural Acoustic Mesh, Zero-Latency DSP Pipeline, and Ultra-Low Dispersion Spatial Renderer."
          },
          {
            title: "Section 3: Kinetic Waveform Dynamics — Procedural Harmonics",
            desc: "Horizontal-fluid feature cards highlighting micro-second synchronization, binaural beamforming, and lossless parametric reconstruction, backed by real-time waveform displacement in WebGL."
          },
          {
            title: "Section 4: Spatial Performance Metrics & Benchmarks",
            desc: "High-contrast technical telemetry displaying verified performance benchmarks: 0.8ms DSP latency, 64-channel spatial resolution, 99.98% phase coherence, and 48kHz / 24-bit floating point precision."
          },
          {
            title: "Section 5: The Interactive Resonance Laboratory",
            desc: "An in-situ interactive playground allowing users to manipulate 3D shader parameters (roughness, dispersion, wave amplitude, frequency modulation) in real time with immediate WebGL feedback."
          },
          {
            title: "Section 6: Developer & Enterprise Integration Ecosystem",
            desc: "Clean SDK integration snippet, cross-platform engine support (WebAudio, C++ SDK, Unity, Unreal Engine 5), and architectural compatibility matrix."
          },
          {
            title: "Section 7: Final Conversion — The Quantum Singularity CTA",
            desc: "High-impact closing canvas where the 3D entity condenses into a glowing focal point, inviting early-access deployment and SDK license requests with instant form validation."
          }
        ]
      }
    ]
  },
  {
    id: "technical-performance",
    title: "5. Technical Architecture & Performance Budgets",
    badge: "Engineering & WebGL",
    audience: "developers",
    summary: "Rigorous technical specifications, shader optimization guidelines, frame rate targets, asset budgets, and mobile degradation strategies.",
    content: [
      {
        heading: "5.1 WebGL & Three.js Rendering Pipeline",
        paragraphs: [
          "The 3D runtime is built upon Three.js (r160+) utilizing custom GLSL vertex and fragment shaders for procedural surface displacement and glass transmission, avoiding heavy unoptimized textures."
        ],
        specs: [
          { label: "Target Frame Rate", value: "Solid 60 FPS (120 FPS on ProMotion displays)", note: "GPU frame budget capped at <11ms per tick" },
          { label: "Total Initial 3D Payload", value: "< 240 KB (Gzipped)", note: "100% procedural geometry and mathematical noise, no heavy GLTF files required" },
          { label: "Draw Call Budget", value: "< 14 draw calls per frame", note: "Leverages InstancedMesh for particles and combined geometry buffers" },
          { label: "Pixel Ratio Capping", value: "Math.min(window.devicePixelRatio, 2)", note: "Prevents GPU fill-rate exhaustion on ultra-dense 3x mobile screens" }
        ]
      },
      {
        heading: "5.2 Responsive Strategy & Mobile Fallbacks",
        paragraphs: [
          "On mobile viewports (<768px), the WebGL scene automatically switches to a low-overhead mobile profile:",
          "1. Shader transmission passes are replaced with single-pass pseudo-refraction.",
          "2. Particle counts scale dynamically from 2,400 to 600.",
          "3. Touch gyro and swipe gestures substitute for mouse parallax tracking.",
          "4. Battery/low-power mode auto-throttles the rendering loop to 30 FPS when idle."
        ],
        callout: {
          type: "note",
          text: "Accessibility Mandate: Must respect 'prefers-reduced-motion' media query by disabling continuous auto-spin and smoothing transitions to gentle opacity crossfades."
        }
      }
    ]
  },
  {
    id: "differentiation",
    title: "6. Differentiation Analysis vs. Generic 3D Sites",
    badge: "Competitive Edge",
    audience: "all",
    summary: "Detailed breakdown of the exact mechanical and visual differentiators separating Fonix from typical OnePageLove templates.",
    content: [
      {
        heading: "6.1 Elimination of Generic 3D Tropes",
        paragraphs: [
          "Most 3D websites featured on design aggregators suffer from repetitive execution: generic purple-cyan gradients, detached floating spline bubbles, or heavy static 3D models that do not correlate with product functionality."
        ],
        bulletPoints: [
          {
            title: "Functional Meaning vs. Cosmetic Decoration",
            desc: "In Fonix, every wave ripple directly maps to a simulated acoustic frequency. The 3D model is a functional representation of spatial sound processing, not a disconnected 3D mascot."
          },
          {
            title: "Physical-Optical Realism vs. Synthetic Pastel Plasticky Shaders",
            desc: "Instead of matte clay or candy-colored plastic shaders, Fonix leverages deep monochromatic obsidian glass, real optical dispersion, and liquid metal physics for a mature, ultra-luxury aesthetic."
          },
          {
            title: "Continuous Dynamic Spatial State vs. Section-Stitched Stills",
            desc: "The 3D scene maintains state continuity across the entire scroll length. The camera moves through a single coherent mathematical coordinate space rather than jumping between separate canvases."
          },
          {
            title: "Instant Zero-Wait Load vs. 20MB GLTF Loading Screens",
            desc: "By generating all geometry procedurally with custom mathematical vertex deformations, the entire 3D site loads instantly with 0-second asset downloading delays."
          }
        ]
      }
    ]
  }
];

export const PRD_MARKDOWN_EXPORT = `# Product Requirements Document (PRD)
## Project: Fonix One-Page 3D Experience
**Version:** 1.0.0-PROD  
**Target:** AI Studio Engineering & Design Teams  
**Status:** Approved for Build  

---

### 1. Executive Summary & Brand Concept
Fonix is a next-generation acoustic intelligence and spatial sound synthesis platform. This one-page digital experience transforms the browser window into a living acoustic-kinetic environment, communicating technical authority and visceral physical computing.

### 2. Visual Direction & 3D Aesthetics
- **Material Quality:** Dual-State Translucent Core combining 'Acoustic Glass' (IOR 1.48-1.54, optical flint glass with edge chromatic dispersion) and 'Liquid Mercury Lattice' (mirror-polished fluid metal core).
- **Lighting Rig:** Three-point architectural lighting + celestial ambient HDR. High-contrast directional key lights with dynamic caustic glints.
- **Color Palette:**
  - Void Obsidian (\`#0B0D11\`) — Primary canvas
  - Prismatic Luminescence (\`#5EEAD4\` & \`#818CF8\`) — Wave crest highlights
  - Liquid Platinum (\`#E2E8F0\`) — Core geometry highlights
  - Warm Titanium Accent (\`#F59E0B\`) — Acoustic nodes & primary conversion
- **Hero 3D Asset:** 'Resonating Acoustic Monolith' — icosahedral frosted crystal cage housing a continuously deforming harmonic liquid soundwave sphere.
- **Secondary 3D Elements:** Orbital gyroscopic wave rings, refractive glass acoustic nodes, and 2,400 particulate sonic photons.

### 3. Motion & Interaction Model
- **Movement Philosophy:** Viscoelastic mechanical fluidity with mass, inertia, and 432Hz harmonic dampening.
- **Scroll Choreography:**
  - 0% - 20%: Intact Monolith with mouse tilt
  - 20% - 45%: Exploded Core exposing 3 internal engine layers
  - 45% - 70%: Waveform Ribbon undulating in 3D
  - 70% - 85%: Orbital Interactive Matrix
  - 85% - 100%: Quantum Singularity focusing into CTA
- **Parallax:** Dual-layer torque with opposing lag factors (0.05 outer cage, 0.08 inner core).

### 4. Page Structure
1. **Hero:** Sonic Monolith, display headline, live 3D canvas, CTA trigger.
2. **Core Architecture:** 3-layer exploded 3D engine view with technical breakdown.
3. **Kinetic Waveforms:** Procedural harmonics with interactive frequency ribbon.
4. **Telemetry & Benchmarks:** 0.8ms latency, 64-channel spatial resolution, 99.98% phase coherence.
5. **Interactive Resonance Lab:** Real-time shader parameter sliders (roughness, IOR, dispersion, wave freq).
6. **Integration Ecosystem:** SDK code snippet and cross-platform compatibility matrix.
7. **Quantum Singularity CTA:** High-density focal point with early-access form.

### 5. Technical & Performance Specifications
- **Stack:** Three.js (r160+), Custom GLSL Shaders, Tailwind CSS, Framer Motion.
- **Performance Budget:** 60 FPS locked (<11ms GPU frame time), <240KB gzipped 3D payload.
- **Optimization:** Procedural mathematical geometry (no heavy GLTF files), InstancedMesh particles, pixelRatio capped at 2.0.
- **Mobile Strategy:** Single-pass pseudo-refraction, 600 particles, touch gyro, 30 FPS power-save mode.

### 6. Differentiation Notes
- Eliminates generic purple-cyan plastic spheres in favor of physical flint glass, caustic dispersion, and liquid metal.
- Replaces disconnected 3D decoration with real-time acoustic physics mapping.
- Guarantees instant sub-second cold start through zero-asset procedural geometry.
`;
