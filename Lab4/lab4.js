const express = require('express');
const exphbs = require('express-handlebars').create();

const app = express();
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.render('home', {layout: 'main'});
});

app.get('/tinhtoan', (req, res) => {
  res.render('default', { 
    layout: 'main',
    soA: 5,
    soB:7,
    kq: 22,
    operator: 'cong',
  });
});

app.get('/maytinh', (req, res) => {
  res.render('default', { 
    layout: 'maytinh'
    
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
