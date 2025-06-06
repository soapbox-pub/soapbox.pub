import { spawn } from 'child_process';
import path from 'path';

export function generateStaticPagesPlugin() {
  return {
    name: 'generate-static-pages',
    closeBundle() {
      // Run the static page generation script after build
      return new Promise((resolve, reject) => {
        const scriptPath = path.resolve(process.cwd(), 'scripts/generateStaticPages.js');
        const child = spawn('node', [scriptPath], {
          stdio: 'inherit',
          shell: true
        });
        
        child.on('close', (code) => {
          if (code === 0) {
            console.log('\n✅ Static pages generated successfully');
            resolve();
          } else {
            console.error('\n❌ Failed to generate static pages');
            reject(new Error(`Script failed with exit code ${code}`));
          }
        });
        
        child.on('error', (error) => {
          console.error('\n❌ Failed to run generate static pages script:', error);
          reject(error);
        });
      });
    }
  };
}