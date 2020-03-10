alert("entramos al city.js");
$(document).ready(function(){
    // $( "#form_pokemon" ).submit(function( event ) {
    //     event.preventDefault();
        

        $("#ciudad").empty();


        $.json({
            url: `https://jobs.github.com/positions.json`,   
            /* Importante url entre comillas inclinadas AltGr } espacio para que se genere */
        })
        .done(function( data ) {
                console.log( "Sample of data:", data); 
                $("#ciudad").append(`<div><h3>${data.location}</h3></div>`);
                });  
    // });
});
