import fs from 'fs';
import path from 'path';

function walk(dir: string, callback: (path: string) => void) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    if (isDirectory) {
      if (!dirPath.includes('node_modules') && !dirPath.includes('.git')) {
        walk(dirPath, callback);
      }
    } else {
      if (dirPath.endsWith('.tsx') || dirPath.endsWith('.ts') || dirPath.endsWith('.css') || dirPath.endsWith('.md')) {
        callback(dirPath);
      }
    }
  });
}

walk('.', (p) => {
  const content = fs.readFileSync(p, 'utf8');
  if (content.includes('brand-blue') || content.includes('sand-300')) {
    const newContent = content.replace(/brand-blue/g, 'brand-blue').replace(/sand-300/g, 'sand-300');
    fs.writeFileSync(p, newContent);
    console.log(`Updated ${p}`);
  }
});
