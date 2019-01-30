var router = require('express').Router();
var burger = require('../models/burger.js');


router.get("/", function(request, response){
    burger.selectAll(function(data){
        var burgObj = {
            burgers: data
        };
        response.render("index", burgObj);
    });
});
router.post("/api/burgers/", function(request, response){
    burger.insertOne(
        [
        "burger_name", "devoured"
        ], 
        [request.body.burger_name, "false"],
        function(result){
            response.status(200).end();
        }
    );
});

router.put("/api/burgers/", function(request, response){
    var condition = {
         [request.body.conditionField]: request.body.conditionValue
    }
    
    burger.updateOne({"devoured": 1}, condition, function(result){
        console.log("update successful");
        
    });
});

module.exports = router;
