let db = require("../models");

module.exports = function(app) {
    app.get("/api/exercise", function(req, res){
        db..findAll({}).then(function(dbIndex){
            res.json(dbIndex);
        })
    })
}