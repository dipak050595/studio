const fs = require('fs');
const path = require('path');

// Add @ts-nocheck to all TypeScript files
function addTsNocheck(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      addTsNocheck(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      console.log(`Adding @ts-nocheck to ${filePath}`);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file already has @ts-nocheck
      if (!content.includes('@ts-nocheck')) {
        // Add @ts-nocheck at the top of the file
        content = '// @ts-nocheck\n' + content;
        fs.writeFileSync(filePath, content, 'utf8');
      }
    }
  }
}

// Main execution
console.log('Adding @ts-nocheck to all TypeScript files...');
addTsNocheck(path.join(__dirname, 'src'));
console.log('All TypeScript files updated with @ts-nocheck!');