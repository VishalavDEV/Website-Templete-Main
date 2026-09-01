const fs = require('fs');
const https = require('https');
const path = require('path');

const photos = [
  {
    name: 'gallery-dunk-real.jpg',
    url: 'https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'gallery-trophy-real.jpg',
    url: 'https://images.pexels.com/photos/7005680/pexels-photo-7005680.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'gallery-huddle-real.jpg',
    url: 'https://images.pexels.com/photos/2820884/pexels-photo-2820884.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'gallery-standings-real.jpg',
    url: 'https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function downloadFile(fileUrl, destPath) {
  const file = fs.createWriteStream(destPath);
  https.get(fileUrl, (response) => {
    if (response.statusCode === 301 || response.statusCode === 302) {
      downloadFile(response.headers.location, destPath);
    } else {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully saved ${destPath}`);
      });
    }
  }).on('error', (err) => {
    fs.unlink(destPath, () => {});
    console.error(`Error downloading ${destPath}:`, err.message);
  });
}

photos.forEach((item) => {
  const dest = path.join(__dirname, '../public/images', item.name);
  downloadFile(item.url, dest);
});
