const express = require('express');
var fs = require('fs');
const app = express()
const port = 3000

//http://localhost:3000/

app.get('/', (req, res) => {
    fs.readFile('lab3.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
 
})



// bật terminal chạy lệnh npm start để chạy server