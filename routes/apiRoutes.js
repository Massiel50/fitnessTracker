let db = require("../models");

module.exports = function(app) {
    app.get("/api/stats", function(req, res){
        db.index.findAll({}).then(function(dbIndex){
            res.json(dbIndex);
        })
    })
}