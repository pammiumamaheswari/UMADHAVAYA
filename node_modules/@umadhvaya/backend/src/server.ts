import app from './app';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

// Ensure the official UMADHVAYA brand logo is synced to frontend public directories
try {
  const userUploadDir = 'C:\\Users\\91733\\.gemini\\antigravity-ide\\brain\\16dad3e6-f25e-45e2-9c3d-1de974f63d8a\\.user_uploaded';
  const logoFile = path.join(userUploadDir, 'media_1790849147671.png');

  if (fs.existsSync(logoFile)) {
    const targets = [
      path.resolve(__dirname, '../../apps/storefront/public/logo.png'),
      path.resolve(__dirname, '../../apps/storefront/src/assets/logo.png'),
      path.resolve(__dirname, '../../apps/admin/public/logo.png'),
    ];

    for (const target of targets) {
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(logoFile, target);
    }
    console.log('👑 UMADHVAYA Brand Logo synchronized successfully to frontend public assets.');
  }
} catch (err) {
  console.warn('Logo sync notice:', err);
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✨ ========================================================`);
  console.log(`👑 UMADHVAYA Luxury Sarees API Server is Running!`);
  console.log(`🌐 Base URL: http://localhost:${PORT}/api/v1`);
  console.log(`🩺 Health check: http://localhost:${PORT}/api/v1/health`);
  console.log(`✨ ========================================================`);
});
