//https://jobs.github.com/positions.json?description=${consulta}


$(document).ready(function(){
    $('#jobsForm').submit(function(event){
    event.preventDefault();
    let consulta = $('#job').val().toLowerCase();
    let city = $('#city').val().toLowerCase();
    var textofinal="";
    
    console.log(city);
        $.ajax({
          url: `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${consulta}&location=${city}`, 
          method: "GET"
        }).done(function(data) {
          for (i = 0; i < data.length; i++){
            $('.card').append(`<hr/><div class="card-header"><h3> Cargo: ${data[i].title}</h3></di>`)
             $('.card').append(`<div class="card-header"><h5> Ciudad: ${data[i].location}</h5></div>`)
             $(`.card`).append(`<div class="card-body"><a href="#" onclick="vermas('mas');" id="mas">...[Leer Descripcion]</a><blockquote mb-0" id="desplegar" style="display:none;"><p> Descripcion: </p> <p >  ${data[i].description}</p></blockquote></div>`)
            console.log(consulta);
          }
            
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

    