const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', '..', 'public', 'templates');

const scriptToInject = '  <!-- TechnoSprint Responsive Template Preview Wrapper Script -->\n' +
'  <script>\n' +
'    (function() {\n' +
'      const isPlatform = window.location.hostname === \'localhost\' || window.location.hostname === \'127.0.0.1\';\n' +
'      const isTop = window.self === window.top;\n' +
'      const urlParams = new URLSearchParams(window.location.search);\n' +
'      const isIframe = urlParams.get(\'iframe\') === \'true\';\n' +
'      \n' +
'      if (isPlatform && isTop && !isIframe) {\n' +
'        document.documentElement.style.visibility = \'hidden\';\n' +
'        \n' +
'        window.addEventListener(\'DOMContentLoaded\', () => {\n' +
'          const currentUrl = new URL(window.location.href);\n' +
'          currentUrl.searchParams.set(\'iframe\', \'true\');\n' +
'          \n' +
'          const body = document.body;\n' +
'          body.innerHTML = \'\';\n' +
'          body.style.margin = \'0\';\n' +
'          body.style.padding = \'0\';\n' +
'          body.style.height = \'100vh\';\n' +
'          body.style.width = \'100vw\';\n' +
'          body.style.display = \'flex\';\n' +
'          body.style.flexDirection = \'column\';\n' +
'          body.style.overflow = \'hidden\';\n' +
'          body.style.backgroundColor = \'#f1f5f9\';\n' +
'          \n' +
'          // Build Top Bar\n' +
'          const topBar = document.createElement(\'div\');\n' +
'          topBar.id = \'technosprint-preview-header\';\n' +
'          topBar.style.height = \'64px\';\n' +
'          topBar.style.background = \'#ffffff\';\n' +
'          topBar.style.borderBottom = \'1px solid #e2e8f0\';\n' +
'          topBar.style.display = \'flex\';\n' +
'          topBar.style.alignItems = \'center\';\n' +
'          topBar.style.justifyContent = \'space-between\';\n' +
'          topBar.style.padding = \'0 24px\';\n' +
'          topBar.style.boxShadow = \'0 1px 3px rgba(0, 0, 0, 0.05)\';\n' +
'          topBar.style.fontFamily = "\'Plus Jakarta Sans\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif";\n' +
'          topBar.style.zIndex = \'99999\';\n' +
'          topBar.style.position = \'relative\';\n' +
'          topBar.style.boxSizing = \'border-box\';\n' +
'          \n' +
'          // Left side logo\n' +
'          const logoDiv = document.createElement(\'div\');\n' +
'          logoDiv.innerHTML = \'<a href="/templates" style="display: flex; align-items: center; text-decoration: none;"><img src="logo.jpg" alt="TechnoSprint Logo" style="height: 32px; border-radius: 6px; border: 1px solid #e2e8f0;" /></a>\';\n' +
'          topBar.appendChild(logoDiv);\n' +
'          \n' +
'          // Center Template Name\n' +
'          const titleDiv = document.createElement(\'div\');\n' +
'          titleDiv.style.fontWeight = \'600\';\n' +
'          titleDiv.style.fontSize = \'0.9rem\';\n' +
'          titleDiv.style.color = \'#334155\';\n' +
'          titleDiv.innerText = \'< \' + (document.title || \'Template Preview\') + \' >\';\n' +
'          topBar.appendChild(titleDiv);\n' +
'          \n' +
'          // Right view switcher buttons\n' +
'          const rightDiv = document.createElement(\'div\');\n' +
'          rightDiv.style.display = \'flex\';\n' +
'          rightDiv.style.alignItems = \'center\';\n' +
'          rightDiv.style.gap = \'8px\';\n' +
'          rightDiv.innerHTML = \'\' +\n' +
'            \'<button id="view-desktop" style="\' +\n' +
'            \'  background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe;\' +\n' +
'            \'  padding: 8px 16px; border-radius: 8px; font-size: 0.85rem; font-weight: 600;\' +\n' +
'            \'  cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;\' +\n' +
'            \'  outline: none; box-sizing: border-box;\' +\n' +
'            \'">\' +\n' +
'            \'  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>\' +\n' +
'            \'  Desktop\' +\n' +
'            \'</button>\' +\n' +
'            \'<button id="view-tablet" style="\' +\n' +
'            \'  background: #ffffff; color: #475569; border: 1px solid #e2e8f0;\' +\n' +
'            \'  padding: 8px 16px; border-radius: 8px; font-size: 0.85rem; font-weight: 500;\' +\n' +
'            \'  cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;\' +\n' +
'            \'  outline: none; box-sizing: border-box;\' +\n' +
'            \'">\' +\n' +
'            \'  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>\' +\n' +
'            \'  Tablet\' +\n' +
'            \'</button>\' +\n' +
'            \'<button id="view-mobile" style="\' +\n' +
'            \'  background: #ffffff; color: #475569; border: 1px solid #e2e8f0;\' +\n' +
'            \'  padding: 8px 16px; border-radius: 8px; font-size: 0.85rem; font-weight: 500;\' +\n' +
'            \'  cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;\' +\n' +
'            \'  outline: none; box-sizing: border-box;\' +\n' +
'            \'">\' +\n' +
'            \'  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>\' +\n' +
'            \'  Mobile\' +\n' +
'            \'</button>\';\n' +
'          topBar.appendChild(rightDiv);\n' +
'          body.appendChild(topBar);\n' +
'          \n' +
'          // Create Iframe Container\n' +
'          const iframeContainer = document.createElement(\'div\');\n' +
'          iframeContainer.style.flex = \'1\';\n' +
'          iframeContainer.style.display = \'flex\';\n' +
'          iframeContainer.style.alignItems = \'center\';\n' +
'          iframeContainer.style.justifyContent = \'center\';\n' +
'          iframeContainer.style.background = \'#f1f5f9\';\n' +
'          iframeContainer.style.padding = \'20px\';\n' +
'          iframeContainer.style.boxSizing = \'border-box\';\n' +
'          iframeContainer.style.overflow = \'hidden\';\n' +
'          \n' +
'          const iframe = document.createElement(\'iframe\');\n' +
'          iframe.id = \'preview-iframe\';\n' +
'          iframe.src = currentUrl.toString();\n' +
'          iframe.style.width = \'100%\';\n' +
'          iframe.style.height = \'100%\';\n' +
'          iframe.style.border = \'none\';\n' +
'          iframe.style.borderRadius = \'12px\';\n' +
'          iframe.style.boxShadow = \'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)\';\n' +
'          iframe.style.background = \'#ffffff\';\n' +
'          iframe.style.transition = \'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1)\';\n' +
'          \n' +
'          iframeContainer.appendChild(iframe);\n' +
'          body.appendChild(iframeContainer);\n' +
'          \n' +
'          // Interactivity\n' +
'          const btnDesktop = body.querySelector(\'#view-desktop\');\n' +
'          const btnTablet = body.querySelector(\'#view-tablet\');\n' +
'          const btnMobile = body.querySelector(\'#view-mobile\');\n' +
'          \n' +
'          let activeMode = \'desktop\';\n' +
'          \n' +
'          function setView(mode) {\n' +
'            activeMode = mode;\n' +
'            [btnDesktop, btnTablet, btnMobile].forEach(btn => {\n' +
'              btn.style.background = \'#ffffff\';\n' +
'              btn.style.color = \'#475569\';\n' +
'              btn.style.borderColor = \'#e2e8f0\';\n' +
'              btn.style.fontWeight = \'500\';\n' +
'            });\n' +
'            \n' +
'            if (mode === \'desktop\') {\n' +
'              btnDesktop.style.background = \'#eff6ff\';\n' +
'              btnDesktop.style.color = \'#1e40af\';\n' +
'              btnDesktop.style.borderColor = \'#bfdbfe\';\n' +
'              btnDesktop.style.fontWeight = \'600\';\n' +
'              iframe.style.width = \'100%\';\n' +
'              iframe.style.height = \'100%\';\n' +
'              iframe.style.borderRadius = \'12px\';\n' +
'              iframe.style.border = \'none\';\n' +
'            } else if (mode === \'tablet\') {\n' +
'              btnTablet.style.background = \'#eff6ff\';\n' +
'              btnTablet.style.color = \'#1e40af\';\n' +
'              btnTablet.style.borderColor = \'#bfdbfe\';\n' +
'              btnTablet.style.fontWeight = \'600\';\n' +
'              iframe.style.width = \'768px\';\n' +
'              iframe.style.height = \'1024px\';\n' +
'              iframe.style.maxHeight = \'100%\';\n' +
'              iframe.style.borderRadius = \'24px\';\n' +
'              iframe.style.border = \'12px solid #0f172a\';\n' +
'            } else if (mode === \'mobile\') {\n' +
'              btnMobile.style.background = \'#eff6ff\';\n' +
'              btnMobile.style.color = \'#1e40af\';\n' +
'              btnMobile.style.borderColor = \'#bfdbfe\';\n' +
'              btnMobile.style.fontWeight = \'600\';\n' +
'              iframe.style.width = \'375px\';\n' +
'              iframe.style.height = \'667px\';\n' +
'              iframe.style.maxHeight = \'100%\';\n' +
'              iframe.style.borderRadius = \'32px\';\n' +
'              iframe.style.border = \'14px solid #0f172a\';\n' +
'            }\n' +
'          }\n' +
'          \n' +
'          btnDesktop.addEventListener(\'click\', () => setView(\'desktop\'));\n' +
'          btnTablet.addEventListener(\'click\', () => setView(\'tablet\'));\n' +
'          btnMobile.addEventListener(\'click\', () => setView(\'mobile\'));\n' +
'          \n' +
'          const btns = [\n' +
'            { btn: btnDesktop, mode: \'desktop\' },\n' +
'            { btn: btnTablet, mode: \'tablet\' },\n' +
'            { btn: btnMobile, mode: \'mobile\' }\n' +
'          ];\n' +
'          \n' +
'          btns.forEach(item => {\n' +
'            item.btn.addEventListener(\'mouseenter\', () => {\n' +
'              if (activeMode !== item.mode) {\n' +
'                item.btn.style.background = \'#f8fafc\';\n' +
'                item.btn.style.borderColor = \'#cbd5e1\';\n' +
'              }\n' +
'            });\n' +
'            item.btn.addEventListener(\'mouseleave\', () => {\n' +
'              if (activeMode !== item.mode) {\n' +
'                item.btn.style.background = \'#ffffff\';\n' +
'                item.btn.style.borderColor = \'#e2e8f0\';\n' +
'              }\n' +
'            });\n' +
'          });\n' +
'          \n' +
'          document.documentElement.style.visibility = \'visible\';\n' +
'        });\n' +
'      }\n' +
'    })();\n' +
'  </script>\n';

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      walkDir(dirPath, callback);
    } else {
      callback(dirPath);
    }
  });
}

console.log("Starting preview script injection under " + targetDir);
let count = 0;
walkDir(targetDir, (filePath) => {
  if (path.basename(filePath).toLowerCase() === 'index.html') {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('TechnoSprint Responsive Template Preview Wrapper Script')) {
      return;
    }
    
    // Inject the script right after <body> or <body ...> tag
    const bodyRegex = /(<body[^>]*>)/i;
    if (bodyRegex.test(content)) {
      content = content.replace(bodyRegex, "$1\n" + scriptToInject);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log("Injected preview script into: " + filePath);
      count++;
    }
  }
});
console.log("Successfully injected preview wrapper script into " + count + " templates.");
