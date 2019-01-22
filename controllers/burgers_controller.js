var router = require('express').Router();
var burger = require('./models/burger.js');


//does the jquery for the index go here??????
router.get("/", function(request, response){
    burger.selectAll(function(data){
        var burgObj = {
            burgers: data
        };
        console.log(burgObj);
        response.render("index", burgObj);
    });
});
//not sure on all of the post/put 
router.post("/", function(request, response){
    burger.insertOne(
        [
        "name", "devoured"
        ], 
        [request.body.name, request.body.devoured],
        function(result){
            //probably need to do something different here to render on index
            response.json(result);
        }
    );
});

router.put("/", function(request, response){
    var condition = "id = " ;//data attribute from devour button
    burger.updateOne(["devoured: true"], condition, function(result){
        //does the jquery go here to update view???  location reload???
        console.log("update successful")
        response.status(200).end();
    });
});


