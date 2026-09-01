const fs = require('fs');
const https = require('https');
const path = require('path');

const photos = [
  {
    name: 'gallery-huddle-real.jpg',
    url: 'https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=800', // Real basketball team huddle / hands in
  },
  {
    name: 'gallery-trophy-real.jpg',
    url: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800', // Gold sports championship cup
  },
  {
    name: 'gallery-standings-real.jpg',
    url: 'https://images.pexels.com/photos/163452/basketball-hoop-arena-board-163452.jpeg?auto=compress&cs=tinysrgb&w=800', // Real basketball stadium arena scoreboard
  },
  {
    name: 'gallery-dunk-real.jpg',
    url: 'https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=800', // Real basketball net dunk
  }
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
        console.log(`Downloaded: ${destPath}`);
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
