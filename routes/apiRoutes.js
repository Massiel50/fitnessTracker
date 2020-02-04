let db = require("../models");

// module.exports = function(app) {
//     app.get("/api/exercise", function(req, res){
//         db..findAll({}).then(function(dbIndex){
//             res.json(dbIndex);
//         })
//     })
// }

app.post("/api/workouts", ({body}, res) => {
    db.exercises.create(body)
      .then(({_id}) => db.exercises)
      .then(dbexercises => {
        res.json(dbexercises);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.get("/api/workouts", (req, res) => {
    db.exercises.find({})
      .then(dbexercises => {
        res.json(dbexercises);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.post("/api/workouts/:id", (req, res) => {
    db.exercises.update(
      {
        _id: mongojs.ObjectID(req.params.id)
      },
      {
        $set: {
          type: req.body.type,
          name: req.body.name,
          duration: req.body.duration,
          weight: req.body.weight,
          reps: req.body.reps,
          sets: req.body.sets,
          distance: req.body.distance
        }
      },
      (error, data) => {
        if (error){
          res.send(error)
        } else {
          res.json(data)
        }
      }
    )
  })