const fs = require('fs');
const https = require('https');
const path = require('path');

const photos = [
  {
    name: 'news-launch.jpg',
    url: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800', // Tournament court launch
  },
  {
    name: 'news-match.jpg',
    url: 'https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=800', // Match action rim shot
  },
  {
    name: 'news-player.jpg',
    url: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800', // Player team athletic focus
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
