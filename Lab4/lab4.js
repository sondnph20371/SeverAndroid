const express = require('express');
const exphbs = require('express-handlebars').create();

const app = express();
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.render('home', {layout: 'main'});
});
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
