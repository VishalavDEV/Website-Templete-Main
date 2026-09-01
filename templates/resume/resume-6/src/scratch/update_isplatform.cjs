const fs = require('fs');
const path = require('path');

const root = process.cwd();

const targetDirs = [
  path.join(root, 'templates'),
  path.join(root, 'frontend', 'templates'),
  path.join(root, 'frontend', 'public', 'templates')
];

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file === 'index.html') {
      callback(filePath);
    }
  }
}

const targetString = "const isPlatform = window.location.host === 'localhost:5173' || window.location.host === '127.0.0.1:5173';";
const replacementString = "const isPlatform = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';";

let updatedCount = 0;

targetDirs.forEach(dir => {
  walkDir(dir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(targetString)) {
      content = content.split(targetString).join(replacementString);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
      updatedCount++;
    }
  });
});

console.log(`Done! Generalization complete. Total files updated: ${updatedCount}`);
