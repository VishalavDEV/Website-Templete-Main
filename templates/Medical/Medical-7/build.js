const fs = require('fs');
const path = require('path');

// Ensure dist directory exists
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy directories
const copyDir = (src, dest) => {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

copyDir('css', 'dist/css');
copyDir('js', 'dist/js');
if (fs.existsSync('index.html')) {
  fs.copyFileSync('index.html', 'dist/index.html');
}
console.log('Build finished successfully!');
