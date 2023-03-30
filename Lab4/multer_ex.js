const express = require('express')
const exphbs = require('express-handlebars').create();
const bodyParser = require('body-parser')
const multer = require('multer');
const port = 3000;
const app = express();
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');
//mongoose db connection
const mongoose = require('mongoose');

const url = 'mongodb+srv://sondnph20371:9WAkCEiwRsTJ4x9o@cluster0.yclblt9.mongodb.net/Test?retryWrites=true&w=majority';
const svModel = require('./svModel');



app.get('/sinhviens', async (req, res) => {
    await mongoose.connect(url).then(console.log('kets noi db thanh cong'));
    const sinhviens = await svModel.find();

    //1 cach khac
    for(let i = 0; i < sinhviens.length; i++) {
        let arrSV = sinhviens[i];
        console.log(`Sinh vien thu ${i+1}: `);
        console.log(`tensv: ${arrSV.ten}, tuoi: ${arrSV.tuoi}`);
    };

    res.render('home', {
        layout: 'main',
        listSV: sinhviens.map(sinhvien => sinhvien.toJSON())
        
    });

        // res.send(sinhviens); 

});




//them du liey
app.get('/addsv', async (req, res) => {
    await mongoose.connect(url).then(console.log('ket noi db thanh cong'));
    let sv = new svModel({
        ten: 'Tâm',
        tuoi: 28
    });
    sv.diachi = 'HN';

    try {
        console.log(sv);

       
        res.send(sv);
        await sv.save();

    } catch (e) {
        res.status(500).send(e);
    }
});

//update du lieu
app.get('/updatesv', async (req, res) => {
    await mongoose.connect(url).then(console.log('ket noi db thanh cong'));
   

    try {
        var results = await svModel.updateOne({ten: 'chi'}, {ten: 'Hương', tuoi: 20});
        console.log(results);
      
        res.send(results);
        // await sv.save();

    } catch (e) {
        res.status(500).send(e);
    }
});

//delete du lieu
app.get('/deletesv', async (req, res) => {
    await mongoose.connect(url).then(console.log('ket noi db thanh cong'));
   

    try {
        var results = await svModel.findOneAndRemove({ten: 'nam'});
        console.log(results);
         
    
        res.send(results);
        // await sv.save();

    } catch (e) {
        res.status(500).send(e);
    }
});


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
        cb(null, nameF + '-' + Date.now() + '.' + dingDang)
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
