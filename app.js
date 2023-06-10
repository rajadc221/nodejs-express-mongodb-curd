const express = require('express');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));

// Set up your routes here
app.get('/', (req, res) => {
  const db=req.body();
  console.log(db);
  const message = 'Hello, EJS!';
  res.render('home', { message });
});

app.get('/register', (req, res) => {
  const message = 'Hello, EJS!';
  res.render('demo', { message });
});
app.get('/login', (req, res) => {
  const message = 'Hello, EJS!';
  res.render('login', { message });
});
app.get('/profile', (req, res) => {
  const message = 'Hello, EJS!';
  res.render('profile');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
