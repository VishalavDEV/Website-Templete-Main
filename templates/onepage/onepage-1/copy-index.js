import fs from 'fs';
import path from 'path';

try {
  const dest = path.resolve('dist');
  console.log('Copying index.html to templates/index.html inside dist...');
  fs.cpSync(path.join(dest, 'index.html'), path.join(dest, 'templates/index.html'));
  console.log('Copy completed successfully!');
} catch (error) {
  console.error('Copy failed:', error);
  process.exit(1);
}
