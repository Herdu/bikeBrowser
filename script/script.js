/**
 * Created by Mati on 2017-03-04.
 */

var myApiUrl = "http://api.citybik.es/v2/networks";
var data;
var poznan;


$( document ).ready(function(){
    
    $.ajax({
        url: myApiUrl,
        success: function(result) {
            data = result.networks;
            console.log(data);

        }
    });
    
});



$('#btn').on('click', function(){

    $.each(data, function(index, value){
        if (value.location.city ==='Poznań')
        {
            console.log(value);
            poznan = value;
        }

    })
    
});