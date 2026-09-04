import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

try {
  // Dynamically build all template categories in templates/
  const templatesRootDir = path.resolve('templates');
  if (fs.existsSync(templatesRootDir)) {
    const categories = fs.readdirSync(templatesRootDir).filter(c => 
      fs.statSync(path.join(templatesRootDir, c)).isDirectory()
    );

    for (const category of categories) {
      const categoryDir = path.join(templatesRootDir, category);
      const subTemplates = fs.readdirSync(categoryDir).filter(t => 
        fs.statSync(path.join(categoryDir, t)).isDirectory()
      );

      for (const templateDirName of subTemplates) {
        const templatePath = path.join(categoryDir, templateDirName);
        if (fs.existsSync(path.join(templatePath, 'package.json'))) {
          console.log(`Building ${category}/${templateDirName}...`);
          const targetCategory = category.toLowerCase();
          const targetName = templateDirName.toLowerCase();
          try {
            execSync(`npx vite build --outDir ${path.resolve('frontend/public/templates', targetCategory, targetName)}`, {
              cwd: templatePath,
              stdio: 'inherit'
            });
          } catch (err) {
            console.warn(`Failed to build ${category}/${templateDirName}, proceeding...`);
          }
        }
      }
    }
  }

  // Install frontend dependencies
  console.log('Installing frontend dependencies...');
  execSync('npm install', { cwd: path.resolve('frontend'), stdio: 'inherit' });

  // Build frontend
  console.log('Building frontend...');
  execSync('npm run build', { cwd: path.resolve('frontend'), stdio: 'inherit' });

  const src = path.resolve('frontend/dist');
  const dest = path.resolve('dist');

  // Copy index.html to templates/index.html in frontend/dist first
  console.log('Copying index.html to templates/index.html in frontend/dist...');
  fs.cpSync(path.join(src, 'index.html'), path.join(src, 'templates/index.html'));

  // Copy frontend/dist to root dist
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
