const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=800';
const dest = path.join(__dirname, '../public/images/marcus-3pointer-real.jpg');

const file = fs.createWriteStream(dest);

https.get(url, (response) => {
  if (response.statusCode === 301 || response.statusCode === 302) {
    https.get(response.headers.location, (res) => {
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Download completed successfully!');
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download completed successfully!');
    });
  }
}).on('error', (err) => {
  fs.unlink(dest, () => {});
  console.error('Error downloading file:', err.message);
});
