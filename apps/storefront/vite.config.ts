import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

function copyStoryImagesPlugin(): Plugin {
  return {
    name: 'copy-story-images',
    buildStart() {
      try {
        const brainDir = 'C:\\Users\\91733\\.gemini\\antigravity-ide\\brain\\4558752c-6f4f-4db1-a89d-e7437309da96';
        const publicDir = path.resolve(__dirname, 'public/stories');
        const assetsDir = path.resolve(__dirname, 'src/assets/stories');

        [publicDir, assetsDir].forEach((dir) => {
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
        });

        const files = {
          'corporate.jpg': 'corporate_saree_1791020845432.jpg',
          'teacher.jpg': 'teacher_saree_1791020867821.jpg',
          'lawyer.jpg': 'lawyer_saree_1791021056593.jpg',
          'entrepreneur.jpg': 'entrepreneur_saree_1791021110519.jpg',
          'ias.jpg': 'ias_officer_saree_1791024130560.jpg',
          'doctor.jpg': 'ias_officer_saree_1791024130560.jpg',
          'creative.jpg': 'creative_saree_1791021170085.jpg',
          'homemaker.jpg': 'homemaker_saree_1791021199221.jpg',
          'student.jpg': 'student_saree_new_1791023850960.jpg',
          'mayura_day.jpg': 'mayura_paithani_day_1791025924068.jpg',
          'mayura_night.jpg': 'mayura_paithani_night_1791025952369.jpg',
          'timeline_530pm.jpg': 'timeline_coffee_530pm_1791026475923.jpg',
        };

        for (const [targetName, srcName] of Object.entries(files)) {
          const srcPath = path.join(brainDir, srcName);
          if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, path.join(publicDir, targetName));
            fs.copyFileSync(srcPath, path.join(assetsDir, targetName));
          }
        }
      } catch (err) {
        console.error('[Vite Copy Error]', err);
      }
    },
    configureServer(server) {
      try {
        const brainDir = 'C:\\Users\\91733\\.gemini\\antigravity-ide\\brain\\4558752c-6f4f-4db1-a89d-e7437309da96';
        const publicDir = path.resolve(__dirname, 'public/stories');
        const assetsDir = path.resolve(__dirname, 'src/assets/stories');

        [publicDir, assetsDir].forEach((dir) => {
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
        });

        const files = {
          'corporate.jpg': 'corporate_saree_1791020845432.jpg',
          'teacher.jpg': 'teacher_saree_1791020867821.jpg',
          'lawyer.jpg': 'lawyer_saree_1791021056593.jpg',
          'entrepreneur.jpg': 'entrepreneur_saree_1791021110519.jpg',
          'ias.jpg': 'ias_officer_saree_1791024130560.jpg',
          'doctor.jpg': 'ias_officer_saree_1791024130560.jpg',
          'creative.jpg': 'creative_saree_1791021170085.jpg',
          'homemaker.jpg': 'homemaker_saree_1791021199221.jpg',
          'student.jpg': 'student_saree_new_1791023850960.jpg',
          'mayura_day.jpg': 'mayura_paithani_day_1791025924068.jpg',
          'mayura_night.jpg': 'mayura_paithani_night_1791025952369.jpg',
          'timeline_530pm.jpg': 'timeline_coffee_530pm_1791026475923.jpg',
        };

        for (const [targetName, srcName] of Object.entries(files)) {
          const srcPath = path.join(brainDir, srcName);
          if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, path.join(publicDir, targetName));
            fs.copyFileSync(srcPath, path.join(assetsDir, targetName));
          }
        }
      } catch (err) {
        console.error('[Vite Server Copy Error]', err);
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyStoryImagesPlugin()],
  server: {
    port: 5173,
    host: true,
    fs: {
      allow: ['..', 'C:/Users/91733/.gemini/antigravity-ide/brain'],
    },
  },
});
