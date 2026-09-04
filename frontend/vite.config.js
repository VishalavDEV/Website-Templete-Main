import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-templates-static-html',
      configureServer(server) {
        const mimeTypes = {
          '.html': 'text/html; charset=utf-8',
          '.js': 'application/javascript; charset=utf-8',
          '.mjs': 'application/javascript; charset=utf-8',
          '.css': 'text/css; charset=utf-8',
          '.json': 'application/json; charset=utf-8',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.jpeg': 'image/jpeg',
          '.gif': 'image/gif',
          '.svg': 'image/svg+xml',
          '.webp': 'image/webp',
          '.ico': 'image/x-icon',
          '.woff': 'font/woff',
          '.woff2': 'font/woff2',
          '.ttf': 'font/ttf',
          '.mp4': 'video/mp4',
          '.webm': 'video/webm'
        };

        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/templates/')) {
            const parsedUrl = new URL(req.url, 'http://localhost:5173');
            let pathname = parsedUrl.pathname;
            
            // Check if directory without trailing slash
            const rawFilePath = path.join(process.cwd(), 'public', pathname);
            if (fs.existsSync(rawFilePath) && fs.statSync(rawFilePath).isDirectory()) {
              if (!pathname.endsWith('/')) {
                res.writeHead(301, {
                  Location: pathname + '/' + (parsedUrl.search || '') + (parsedUrl.hash || '')
                });
                return res.end();
              }
              pathname += 'index.html';
            } else if (pathname.endsWith('/')) {
              pathname += 'index.html';
            }

            const filePath = path.join(process.cwd(), 'public', pathname);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase();
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
              return res.end(fs.readFileSync(filePath));
            }
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 5173,
    host: '0.0.0.0',
    watch: {
      ignored: ['**/public/**']
    }
  },
  optimizeDeps: {
    entries: ['index.html', 'src/main.jsx']
  }
})
