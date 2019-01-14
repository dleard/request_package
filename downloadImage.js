const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
          console.log('Response Status Code: ', response.statusCode);
          console.log('Response Status Message: ', response.statusMessage);
          console.log('Response Headers: ', response.headers['content-type']);
          console.log();
          console.log('Downloading Image...`')
       })
       .on('end', function() {
         console.log('Download Complete')
       })
       .pipe(fs.createWriteStream('./downloadedImage.jpg'));