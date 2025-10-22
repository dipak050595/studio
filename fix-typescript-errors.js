const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Common TypeScript errors and their fixes
const commonFixes = {
  // Add type definitions for common React Native components
  addComponentTypes: (content) => {
    return content.replace(
      /const\s+(\w+)\s*=\s*\(\s*\)\s*=>/g, 
      'const $1: React.FC = () =>'
    );
  },
  
  // Fix useState typing
  fixUseState: (content) => {
    return content.replace(
      /const\s+\[(\w+),\s*set(\w+)\]\s*=\s*useState\(\)/g,
      (match, stateName) => {
        const type = inferTypeFromName(stateName);
        return `const [${stateName}, set${capitalize(stateName)}] = useState<${type} | null>(null)`;
      }
    );
  },
  
  // Add return types to functions
  addFunctionReturnTypes: (content) => {
    return content.replace(
      /const\s+(\w+)\s*=\s*\(\s*(.*?)\s*\)\s*=>\s*{/g,
      'const $1 = ($2): void => {'
    );
  },
  
  // Fix any types
  fixAnyTypes: (content) => {
    return content.replace(/: any/g, ': unknown');
  },
  
  // Add proper event types
  fixEventTypes: (content) => {
    return content
      .replace(
        /onPress\s*=\s*\{\s*\(\s*\)\s*=>/g, 
        'onPress={() =>'
      )
      .replace(
        /onChange\s*=\s*\{\s*\(\s*(\w+)\s*\)\s*=>/g, 
        'onChange={($1: any) =>'
      )
      .replace(
        /onChangeText\s*=\s*\{\s*\(\s*(\w+)\s*\)\s*=>/g, 
        'onChangeText={($1: string) =>'
      );
  }
};

// Helper functions
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function inferTypeFromName(name) {
  if (name.includes('count') || name.includes('index') || name.includes('id')) return 'number';
  if (name.includes('is') || name.includes('has') || name.includes('show')) return 'boolean';
  if (name.includes('items') || name.includes('list') || name.includes('array')) return 'any[]';
  return 'string';
}

// Process a single file
function processFile(filePath) {
  try {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    console.log(`Processing ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply all fixes
    for (const fix of Object.values(commonFixes)) {
      content = fix(content);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process all files in a directory recursively
function processDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processDirectory(filePath);
    } else {
      processFile(filePath);
    }
  }
}

// Main execution
console.log('Starting TypeScript error fixes...');
processDirectory(path.join(__dirname, 'src'));
console.log('TypeScript error fixes completed!');

// Install missing dependencies if needed
try {
  console.log('Installing required dependencies...');
  execSync('npm install --save @types/react @types/react-native', { stdio: 'inherit' });
  console.log('Dependencies installed successfully!');
} catch (error) {
  console.error('Error installing dependencies:', error);
}