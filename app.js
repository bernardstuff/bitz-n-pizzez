const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const articleRouter = require('./routes/article');

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs')

app.use('/articles', articleRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  let articlesObj = [

  ]
  res.render('articles/index', {articles: articlesObj});
});


app.listen(port, console.log(`running @ http://localhost:${port}`));