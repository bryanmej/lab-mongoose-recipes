const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  const recipe1 = {
    title: 'Taquitos en el espacio',
    level: 'UltraPro Chef',
    ingredients: ['tortilla', 'patitos', 'tirpas sin lavar', 'tacos de gato'],
    cuisine: 'Mexicanil',
    dishType: 'Snack',
    duration: 20,
    creator: 'Todos',

  }

  let a = Recipe.create(recipe1)
  .then(recipe => {
    console.log(recipe)
  })
  .catch(err => {
    console.log(err)
  })

  let b = Recipe.create(data)
  .then(recipes =>{
    console.log(`You just created ${recipes.length} recipes`)
  })
  .catch(err =>{
    console.log(err)
  })

  let c = Recipe.findOneAndUpdate(
    {title: 'Rigatoni alla Genovese'}, 
    {duration: 100}, 
    { new: true})
    .then(recipe => {
    console.log(recipe)
    })
    .catch(err => {
      console.log(err)
    })

    let d = Recipe.deleteOne({title: 'Carrot Cake'})
    .then(cake => {
      console.log(`bye ${cake}`)
    })
    .catch(err=>{
      console.log(err)
    })

    Promise.all([a, b, c, d])
    .then(()=>{
      mongoose.connection.close()
    })
    .catch(err => {
      console.log(err)
    })

