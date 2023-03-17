var http = require('http');
var uc = require('upper-case');
var utils = require('./utils');
const student = require('./student');
var fs = require('fs');
const NhanVien = utils.NhanVien;

const tinhThuong = (a, b) => {
  return (a / b);
};

const aaa = (mess) => {

  if (typeof mess == 'string') {
    console.log(mess.toUpperCase());
  } else {
    console.log('thong bao khong hop le');
  }

};



http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write(uc.upperCase("Hello World! \n"));
  res.write(uc.upperCase("a a a b! \n"));
  res.write(uc.upperCase("ok ok ok ok! \n"));
  res.write(uc.upperCase("Thuong cua 6/3: " + tinhThuong(6, 3) + "\n"));
  console.log(tinhThuong(3, 5));
  aaa("abc");
  aaa(123);
  res.write(uc.upperCase("Thoi gian hien tai: " + utils.myDateTime()));

  let st1 = new student('Dao Ngoc Son', 'ph20371');
  res.write(st1.getInfor());

  // let nv1 = new NhanVien('Nguyen Ngoc Lam', 'nvqh123');
  // request.write(nv1.getInfor());

  //ghi de vao fie da co, neu chua co thi tao ra
  // fs.appendFile('mynewfile1.txt', 'Ph20371!', function (err) {
  //   if (err) throw err;
  //   console.log('Saved! mynewfile1.txt');
  // });

  //thay the file da co,neu chua co thi tao ra
  fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  fs.writeFile('mynewfile2.json', '{"Age: "  20}', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  dir = './files';
  if(!fs.existsSync(dir)) {
    fs.mkdirSync(dir, {recursive: true});
  }

  fs.writeFile(dir + '/mynewfile2.json', '{"Age: "  20}', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  res.end();

}).listen(3000);
