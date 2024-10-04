const { mongoose } = require('./mongoose');

// Define the meal schema

  const mealSchema = new mongoose.Schema ({
    // Your work starts here
    name: {
      type: String,
      required: true,
    },
    timeOfDay: {
      type: String,
      enum: [ "Breakfast", "Lunch", "Dinner" ],
      required: true,
    },
    mealType: {
      type: String,
      enum: [ "DRINK", "FOOD" ],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  });
  


// Define the plan schema
const planSchema = new mongoose.Schema({
  meals: {
    type: [mealSchema],
    required: true,
  },
  // Your work starts here
   name: {
    type: String,
    required: true,
   }

});

// Create the plan model
const Plan = mongoose.model('plan', planSchema);

module.exports = Plan;
