import http from 'http';

http.get('http://localhost:8080/health', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log('HEALTH STATUS:', res.statusCode);
    console.log('HEALTH BODY:', data);

    http.get('http://localhost:8080/api/products', (res2) => {
      let data2 = '';
      res2.on('data', (chunk) => { data2 += chunk; });
      res2.on('end', () => {
        console.log('PRODUCTS STATUS:', res2.statusCode);
        try {
          const json = JSON.parse(data2);
          console.log('PRODUCTS IN NEW DB COUNT:', json.length);
        } catch (e) {
          console.log('ERROR:', e.message);
        }
      });
    });
  });
}).on('error', (err) => {
  console.error('ERROR CONNECTING:', err.message);
});
