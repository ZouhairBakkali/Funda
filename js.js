$(document).ready(function() {
			
            $("#huisDetails").click(function(event){
               $.getJSON('http://partnerapi.funda.nl/feeds/Aanbod.svc/json/detail/005e7c1d6f6c4f9bacac16760286e3cd/koop/6289a7bb-a1a8-40d5-bed1-bff3a5f62ee6', function(jd) {
                  $('#stage').html('<p> Adres: ' + jd.Adres + '</p>');
                  $('#stage').append('<p>Bouwjaar : ' + jd.Bouwjaar + '</p>');
                  $('#stage').append('<p> Kenmerken: ' + jd.Kenmerken[1,0] + '</p>');
                  $('#stage').append('<img src=" ' + jd.HoofdFoto + '"> ');
				 
               });
            });
				
         });


