import fs from 'fs';
import path from 'path';

try {
  const dest = path.resolve('dist');
  const templateDir = path.join(dest, 'templates');
  if (!fs.existsSync(templateDir)) {
    fs.mkdirSync(templateDir, { recursive: true });
  }
  fs.cpSync(path.join(dest, 'index.html'), path.join(dest, 'templates/index.html'));
  console.log('Copy completed successfully!');
} catch (error) {
  console.error('Copy failed:', error);
  process.exit(1);
}
