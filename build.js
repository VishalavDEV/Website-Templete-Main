import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

try {
  // 1. Build all Medical templates
  const medicalDir = path.resolve('templates/Medical');
  if (fs.existsSync(medicalDir)) {
    const templates = fs.readdirSync(medicalDir).filter(t => 
      fs.statSync(path.join(medicalDir, t)).isDirectory()
    );
    for (const templateDirName of templates) {
      const templatePath = path.join(medicalDir, templateDirName);
      if (fs.existsSync(path.join(templatePath, 'package.json'))) {
        console.log(`Building Medical template: ${templateDirName}...`);
        const targetName = templateDirName.toLowerCase();
        try {
          execSync(`npx vite build --outDir ${path.resolve('frontend/public/templates/medical', targetName)}`, {
            cwd: templatePath,
            stdio: 'inherit'
          });
        } catch (err) {
          console.warn(`Failed to build Medical ${templateDirName}, proceeding...`);
        }
      }
    }
  }

  // 2. Build all Hotel templates
  const hotelDir = path.resolve('templates/hotel');
  if (fs.existsSync(hotelDir)) {
    const templates = fs.readdirSync(hotelDir).filter(t => 
      fs.statSync(path.join(hotelDir, t)).isDirectory()
    );
    for (const templateDirName of templates) {
      const templatePath = path.join(hotelDir, templateDirName);
      if (fs.existsSync(path.join(templatePath, 'package.json'))) {
        console.log(`Building Hotel template: ${templateDirName}...`);
        const targetName = templateDirName.toLowerCase();
        try {
          execSync(`npx vite build --outDir ${path.resolve('frontend/public/templates/hotel', targetName)}`, {
            cwd: templatePath,
            stdio: 'inherit'
          });
        } catch (err) {
          console.warn(`Failed to build Hotel ${templateDirName}, proceeding...`);
        }
      }
    }
  }

  // 2. Install frontend dependencies
  console.log('Installing frontend dependencies...');
  execSync('npm install', { cwd: path.resolve('frontend'), stdio: 'inherit' });

  // 3. Build frontend
  console.log('Building frontend...');
  execSync('npm run build', { cwd: path.resolve('frontend'), stdio: 'inherit' });

  const src = path.resolve('frontend/dist');
  const dest = path.resolve('dist');

  // 4. Copy index.html to templates/index.html in frontend/dist first
  console.log('Copying index.html to templates/index.html in frontend/dist...');
  fs.cpSync(path.join(src, 'index.html'), path.join(src, 'templates/index.html'));

  // 5. Copy frontend/dist to root dist
  console.log('Copying build files to root dist...');
  if (fs.existsSync(dest)) {
    fs.rmSync(dest, { recursive: true, force: true });
  }
  fs.cpSync(src, dest, { recursive: true });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
