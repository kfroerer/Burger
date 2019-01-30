$(document).ready(function(){
    $('.devour-burger').on("click", function(event){
        event.preventDefault();
        
        var newDevouredState = {
            conditionField:'id',
            conditionValue: $(this).attr('data-id'),
            devoured: 1,
        }
        console.log(data);
        $.ajax("/api/burgers/", {
            type: "PUT",
            dataType: 'json',
            data: newDevouredState 
        }).then(function(){
            location.reload();
        });
        });
  

    $('#addBurger').on("click", function(event){
        event.preventDefault();
        var burgName = $("#newBurger").val();
        var newBurger = {
            burger_name: burgName,
            devoured: 0
        }
        console.log(newBurger);
        $.post("/api/burgers", newBurger, function(){
            location.reload();
        });
    });
});
