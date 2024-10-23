// To enable the .env
require('dotenv').config();
const Plan = require('./db/planModel')

// App setup
const express = require('express');
const app = express();

// sử dung engine ejs để render
app.set('view engine', 'ejs')
// khai báo floder public static là một floder tĩnh 
app.use(express.static('public'))


// Home endpoint
app.get('/', async function (req, res) {
  const plan = await Plan.findOne({ name:'Daily Meal Plan #1' });

  console.log (plan);

  res.render('index', { plan });
});

// post end point 
app.post('/', async function (req, res) {

  const count = await Plan.countDocuments()
  const randomIndex = parseInt(Math.random()*count)
  console.log('post ne');
  const plan = await Plan.findOne().limit(-1).skip(randomIndex)

  console.log(plan);

  res.render('index', { plan });
});




// Meal endpoint
app.get('/meal/:name', async function (req, res) {
  //step1
  const { name } = req.params;

  const meal = await Plan.findOne(
    { "meals.name": name },
    { "meals.$": 1 }
  )
  
  console.log('meal', meal)
  // console.log('meals[0]:', meal[0]);

   // step2 
  if (meal) {
    res.render('meal', { meal: meal.meals[0] }); 
  } else {
    res.status(404).send('Meal not found');
  }
});

  
  



// Start the server
const port = process.env.PORT||3000;
console.log(process.env.MONGODB_CONNECTION_STRING);

app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}`);
});

