import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

try {
  // 1. Install frontend dependencies
  console.log('Installing frontend dependencies...');
  execSync('npm install', { cwd: path.resolve('frontend'), stdio: 'inherit' });

  // 2. Build frontend
  console.log('Building frontend...');
  execSync('npm run build', { cwd: path.resolve('frontend'), stdio: 'inherit' });

  const src = path.resolve('frontend/dist');
  const dest = path.resolve('dist');

  // 3. Copy index.html to templates/index.html in frontend/dist first
  console.log('Copying index.html to templates/index.html in frontend/dist...');
  fs.mkdirSync(path.join(src, 'templates'), { recursive: true });
  fs.cpSync(path.join(src, 'index.html'), path.join(src, 'templates/index.html'));

  // 4. Copy frontend/dist to root dist
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
