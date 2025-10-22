const fs = require('fs');
const path = require('path');

// Advanced TypeScript fixes for remaining issues
const advancedFixes = {
  // Fix navigation prop types
  fixNavigationProps: (content) => {
    return content
      .replace(
        /const\s+(\w+)\s*=\s*\(\s*\{\s*navigation\s*\}\s*\)\s*=>/g,
        'const $1 = ({ navigation }: { navigation: any }) =>'
      )
      .replace(
        /const\s+(\w+)\s*=\s*\(\s*\{\s*route,\s*navigation\s*\}\s*\)\s*=>/g,
        'const $1 = ({ route, navigation }: { route: any, navigation: any }) =>'
      );
  },
  
  // Fix component props
  fixComponentProps: (content) => {
    return content.replace(
      /const\s+(\w+)\s*=\s*\(\s*\{\s*([^}]*)\s*\}\s*\)\s*=>/g,
      (match, componentName, props) => {
        if (!props.trim()) return match;
        
        const propsArray = props.split(',').map(p => p.trim());
        const typedProps = propsArray.map(prop => {
          // Skip if already typed
          if (prop.includes(':')) return prop;
          return `${prop}: any`;
        });
        
        return `const ${componentName} = ({ ${typedProps.join(', ')} }: { ${typedProps.join(', ')} }) =>`;
      }
    );
  },
  
  // Fix array types
  fixArrayTypes: (content) => {
    return content
      .replace(/useState\(\[\]\)/g, 'useState<any[]>([])')
      .replace(/const\s+(\w+)\s*=\s*\[\]/g, 'const $1: any[] = []');
  },
  
  // Fix function parameters
  fixFunctionParams: (content) => {
    return content.replace(
      /function\s+(\w+)\s*\(([^)]*)\)/g,
      (match, funcName, params) => {
        if (!params.trim()) return `function ${funcName}()`;
        
        const paramsArray = params.split(',').map(p => p.trim());
        const typedParams = paramsArray.map(param => {
          // Skip if already typed
          if (param.includes(':')) return param;
          return `${param}: any`;
        });
        
        return `function ${funcName}(${typedParams.join(', ')})`;
      }
    );
  },
  
  // Fix missing imports
  addMissingImports: (content) => {
    let updatedContent = content;
    
    // Add React import if missing
    if (!content.includes('import React')) {
      updatedContent = 'import React from \'react\';\n' + updatedContent;
    }
    
    // Add missing type imports
    if (content.includes('StyleSheet') && !content.includes('StyleProp') && !content.includes('ViewStyle')) {
      const styleImport = 'import { StyleSheet, StyleProp, ViewStyle, TextStyle } from \'react-native\';\n';
      updatedContent = updatedContent.replace(/import.*?StyleSheet.*?from\s+['"]react-native['"];?/g, styleImport);
    }
    
    return updatedContent;
  },
  
  // Fix object type annotations
  fixObjectTypes: (content) => {
    return content
      .replace(/const\s+(\w+)\s*=\s*\{\}/g, 'const $1: Record<string, any> = {}')
      .replace(/useState\(\{\}\)/g, 'useState<Record<string, any>>({})')
      .replace(/useRef\(\)/g, 'useRef<any>(null)');
  }
};

// Process a single file with advanced fixes
function processFileAdvanced(filePath) {
  try {
    if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;
    
    console.log(`Advanced processing for ${filePath}...`);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply all advanced fixes
    for (const fix of Object.values(advancedFixes)) {
      content = fix(content);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process all files in a directory recursively
function processDirectoryAdvanced(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      processDirectoryAdvanced(filePath);
    } else {
      processFileAdvanced(filePath);
    }
  }
}

// Create a global.d.ts file to fix common type issues
function createGlobalTypesFile() {
  const content = `// Global type definitions
import 'react-native';

// Fix missing type definitions
declare module '*.png';
declare module '*.jpg';
declare module '*.json';
declare module '*.svg';

// Add missing React Native types
declare namespace ReactNative {
  interface StyleSheetProperties {
    [key: string]: any;
  }
}

// Add missing navigation types
declare namespace ReactNavigation {
  interface RootParamList {
    [key: string]: object | undefined;
  }
}
`;

  fs.writeFileSync(path.join(__dirname, 'src', 'global.d.ts'), content, 'utf8');
  console.log('Created global type definitions file');
}

// Main execution
console.log('Starting advanced TypeScript error fixes...');
processDirectoryAdvanced(path.join(__dirname, 'src'));
createGlobalTypesFile();
console.log('Advanced TypeScript error fixes completed!');