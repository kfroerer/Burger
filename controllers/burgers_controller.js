var router = require('express').Router();
var burger = require('../models/burger.js');


router.get("/", function(request, response){
    burger.selectAll(function(data){
        var burgObj = {
            burgers: data
        };
        console.log(burgObj);
        response.render("index", burgObj);
    });
});
router.post("/api/burgers/", function(request, response){
    console.log(request.body);
    burger.insertOne(
        [
        "burger_name", "devoured"
        ], 
        [request.body.burger_name, "false"],
        function(result){
            
            //probably need to do something different here to render on index
            response.status(200).end();
        }
    );
});
//use postman for all this
router.put("/api/burgers/", function(request, response){
    // var condition = {
    //     id: request.body.id
    //  };
     condition = `id = ${request.body.id}`;
     console.log(condition)//data attribute from devour button
    burger.updateOne({"devoured": 1}, condition, function(result){
        console.log("update successful");
        
        response.status(200).end();
    });
});

module.exports = router;
