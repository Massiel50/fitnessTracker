let mongoose = require("mongoose");
let Schema = mongoose.Schema;



//   schema for exercise, an array of objects
const exercisesSchema = new Schema({
    type: {
        type: String
      },
    
      name: {
        type: String
      },
    
      duration: {
        type: Number
      },
    
      weight: {
        type: Number
      },
    
      reps: {
        type: Number
      },

      sets: {
        type: Number
      },

      distance: {
        type: Number
      }
    
});
  
  const exercises = mongoose.model("exercises", exercisesSchema);
  
  module.exports = exercises;
  