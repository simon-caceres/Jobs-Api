//https://jobs.github.com/positions.json?description=${consulta}


$(document).ready(function(){
    $('#jobsForm').submit(function(event){
    event.preventDefault();
    $('.inyect').html();
    let consulta = $('#job').val().toLowerCase();
    let city = $('#city').val().toLowerCase();
    var textofinal="";
    
    console.log(city);
    let request = $.ajax({
          url: `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${consulta}&location=${city}`, 
          method: "GET"
        })
       
        request.done(function(data) {
          $('.inyect').html("");
          for (i = 0; i < data.length; i++){
            $('.inyect').append(`<hr/><div class = "card"><div class="card-header"><h3> Cargo: ${data[i].title}</h3></di>`)
             $('.inyect').append(`<div class="card-header"><h5> Ciudad: ${data[i].location}</h5></div>`)
             $(`.inyect`).append(`<div class="card-body"><a href="#" onclick="vermas('mas');" id="mas">...[Leer Descripcion]</a><blockquote mb-0" id="desplegar" style="display:none;"><p> Descripcion: </p> <p >  ${data[i].description}</p></blockquote></div> </div>`)
            console.log(consulta);
          }
            
        })
        request.fail(function(request, statusText)
        {
            errorMsg();
        });
      });
  
  });

  function vermas(id){
    if(id=="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none"; 
    }
    else{
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="inline";
    }
    }

    const errorMsg = function()
{
    
    $(`#respuesta`).text('Ups! Parece que hubo un problema');
    $(`#respuesta`).text('Por favor intenta nuevamente.');
    
}

$('.btn:reset').click(function (ev) {
  ev.preventDefault();
  $('.inyect').html("");
});