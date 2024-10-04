// To enable the .env
require('dotenv').config();

// App setup
const express = require('express');
const app = express();

// sử dung engine ejs để render
app.set('view engine', 'ejs')
// khai báo floder public static là một floder tĩnh 
app.use(express.static('public'))


// Home endpoint
app.get('/', function (req, res) {
  res.render('index');
});


// Meal endpoint
app.get('/meal/:name', function (req, res) {
  res.render('meal');
});



// Start the server
const port = process.env.PORT||3000;
console.log(process.env.MONGODB_CONNECTION_STRING);

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});
