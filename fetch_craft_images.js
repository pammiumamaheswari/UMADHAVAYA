const fs = require('fs');
const path = require('path');
const https = require('https');

const candidateImages = {
  'craft_01_silk.jpg': [
    'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&q=85&w=1200',
    'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=85&w=1200',
    'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=85&w=1200',
    'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=85&w=1200'
  ],
  'craft_02_design.jpg': [
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=85&w=1200',
    'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=85&w=1200',
    'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=85&w=1200'
  ],
  'craft_03_loom.jpg': [
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=85&w=1200',
    'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=85&w=1200',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=85&w=1200'
  ],
  'craft_04_zari.jpg': [
    'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=85&w=1200',
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=85&w=1200'
  ],
  'craft_05_weave.jpg': [
    'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&q=85&w=1200',
    'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&q=85&w=1200'
  ],
  'craft_06_saree.jpg': [
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=85&w=1200'
  ]
};

const targetDir = path.resolve(__dirname, '../../apps/storefront/public/stories');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed with status ${res.statusCode}`));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const [filename, urls] of Object.entries(candidateImages)) {
    const dest = path.join(targetDir, filename);
    let success = false;
    for (const url of urls) {
      try {
        console.log(`Trying ${filename} from ${url}...`);
        await download(url, dest);
        const stats = fs.statSync(dest);
        if (stats.size > 5000) {
          console.log(` Successfully saved ${filename} (${stats.size} bytes)`);
          success = true;
          break;
        }
      } catch (err) {
        console.warn(` Failed ${url}: ${err.message}`);
      }
    }
    if (!success && !fs.existsSync(dest)) {
      console.error(`Could not download ${filename}`);
    }
  }
}

run();
