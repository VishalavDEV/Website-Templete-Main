import fs from 'fs';
import path from 'path';

const brainDir = 'C:\\Users\\Harish\\.gemini\\antigravity-ide\\brain\\b5dc3a5a-484e-49fc-b8a3-b8b53aa15bd8';
const workspaceDir = 'c:\\Users\\Harish\\Desktop\\cm-7';

const targets = [
  path.join(workspaceDir, 'public', 'assets', 'images'),
  path.join(workspaceDir, 'src', 'assets', 'images')
];

targets.forEach(t => {
  if (!fs.existsSync(t)) {
    fs.mkdirSync(t, { recursive: true });
  }
});

const brainFiles = fs.readdirSync(brainDir);
const brainMap = {
  'cyber_volt': 'shoe-cyber-volt.jpg',
  'obsidian_cyan': 'shoe-obsidian-cyan.jpg',
  'hyper_crimson': 'shoe-hyper-crimson.jpg',
  'running_motion': 'running-stride-motion.jpg',
  'outsole_sole': 'shoe-outsole.jpg',
  'heel_detail': 'shoe-heel-detail.jpg',
  'running_singlet': 'gear-singlet.jpg',
  'athlete_track_test': 'review-marathon-track.jpg',
  'athlete_night_run': 'review-night-street.jpg',
  'athlete_road_tempo': 'review-road-tempo.jpg',
  'gear_nano_socks': 'gear-nano-socks.jpg',
  'gear_tempo_shoe': 'gear-tempo-shoe.jpg',
  '360_front_angle': 'shoe-360-front.jpg'
};

for (const file of brainFiles) {
  for (const [key, destName] of Object.entries(brainMap)) {
    if (file.includes(key) && file.endsWith('.jpg')) {
      const srcPath = path.join(brainDir, file);
      const stat = fs.statSync(srcPath);
      if (stat.size > 50000) {
        targets.forEach(t => {
          fs.copyFileSync(srcPath, path.join(t, destName));
        });
        console.log(`Copied ${file} (${stat.size} bytes) -> ${destName}`);
      }
    }
  }
}

console.log('360 turntable image synchronized!');
