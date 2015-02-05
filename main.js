  $( 'button' ).on('click', function() {
    var city = $( '#city' ).val();
    $('input').val('');

    if (city == "") {
      $('#temp').text('');
      $('h3').text("You must enter a city.");
    }else{
      $.simpleWeather({
        location: city,
        unit: 'f',
        success: function(weather) {
          $('#temp').text('The temperature in ' +city +' is ' + weather.temp + 'F' );
          switch (true) {
            case weather.temp < 25:
              $('h3').text("You definetly should wear a heavy jacket or maybe call in sick and chill out on the couch.");
              break;
            case weather.temp < 40:
              $('h3').text("it's a bit chilly you better put that jacket on!");
              break;
            case weather.temp < 65:
              $('h3').text("You should wear a light coat or a sweater today.");
              break;
            case weather.temp > 80:
              $('h3').text("You should wear shorts today, maybe even call in sick and go to the beach :)");
              break;
            case weather.temp > 100:
              $('h3').text("Whoa!, don't go outside. Find a pool, some beer and you're set!");
              break;
            default:
              $('h3').text("Wear what you want :) it's " + weather.temp + ' degrees');
          }
        }
      });
    }
  });
