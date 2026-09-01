const fs = require('fs');
const path = require('path');

const root = process.cwd();

const targetFiles = [
  path.join(root, 'templates', 'photography', 'cinematic-wedding', 'index.html'),
  path.join(root, 'templates', 'photography', 'fineart-template', 'index.html'),
  path.join(root, 'frontend', 'public', 'templates', 'photography', 'cinematic-wedding', 'index.html'),
  path.join(root, 'frontend', 'public', 'templates', 'photography', 'fineart-template', 'index.html')
];

const targetPattern = `          topBar.appendChild(centerDiv);
          
          body.appendChild(topBar);`;

const replacementString = `          topBar.appendChild(centerDiv);
          
          const rightDiv = document.createElement('div');
          const pathParts = window.location.pathname.split('/');
          const templateSlug = pathParts[pathParts.length - 2] || 'wedding-template';
          
          rightDiv.innerHTML = \`
            <a id="download-btn-header" href="/templates/\${templateSlug}?action=download" style="
              background: #0066ff;
              color: #ffffff;
              text-decoration: none;
              font-size: 0.85rem;
              font-weight: 600;
              padding: 10px 20px;
              border-radius: 99px;
              box-shadow: 0 4px 12px rgba(0, 102, 255, 0.15);
              transition: all 0.2s ease-in-out;
              display: flex;
              align-items: center;
              gap: 8px;
              letter-spacing: 0.5px;
              box-sizing: border-box;
            ">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Template
            </a>
          \`;
          topBar.appendChild(rightDiv);
          
          body.appendChild(topBar);`;

let updatedCount = 0;

targetFiles.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(targetPattern)) {
      content = content.replace(targetPattern, replacementString);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
      updatedCount++;
    } else {
      console.log(`Pattern not found in: ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`Done! Download button added to ${updatedCount} files.`);
