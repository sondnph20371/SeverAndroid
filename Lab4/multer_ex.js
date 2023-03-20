const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer');
const port = 3000;
const app = express();

//CREATE EXPRESS APP
app.use(bodyParser.urlencoded({ extended: true }))

//ROUTES WILL GO HERE
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/upload.html');
})

//server.js

// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        
        const nameFile = file.originalname.split(".");
        let nameF = nameFile[0];
        let dingDang = nameFile[1];
        cb(null, nameF + '-' + Date.now() + '.' + dingDang )
    }
})

var upload = multer({ storage: storage })

app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    if (!file) {
        const error = new Error('Please upload a file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})




app.listen(port, () => console.log('Server started on port 3000'));
