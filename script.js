$(document).ready(function(){
    $('.player-card').click(function(){
        $('.player-card').fadeOut('slow')

    });

});


function playerCard(player, name, position, number){
  $('.player-card').fadeIn('slow');
  $('#player-name').html(name);
  $('#player-position').html(position);
  $('#player-number').html(number);
  $('.player-card').css('background-image', 'url(gif/' + player + '.gif)');

  if(position == "FORWARD") {
    $('#player-name').removeClass();
    $('#player-name').addClass('forward-text');
  } else if (position == "MIDFIELDER") {
    $('#player-name').removeClass();
    $('#player-name').addClass('midfielder-text');
  } else if (position == "DEFENSE") {
    $('#player-name').removeClass();
    $('#player-name').addClass('defense-text');
  } else if (position == "GOALIE") {
    $('#player-name').removeClass();
    $('#player-name').addClass('goalie-text');
  }
}



function teamJersey(jersey){
    $('.mobile-team').fadeIn('fast');
    $('.mobile-team img').attr('src', 'images/mobile/' + jersey + '.png');

}





//forward hover//

$(document).ready(function(){
    $('.forward-hover').mouseover(function(){
        $('.forward-hover').fadeTo('fast', 0.2)

    });

});

$(document).ready(function(){
    $('.forward-hover').mouseleave(function(){
        $('.forward-hover').fadeTo('fast', 0)

    });

});



//midfielder hover//

$(document).ready(function(){
    $('.mid-hover').mouseover(function(){
        $('.mid-hover').fadeTo('fast', 0.2)

    });

});

$(document).ready(function(){
    $('.mid-hover').mouseleave(function(){
        $('.mid-hover').fadeTo('fast', 0)

    });

});





//defense hover

$(document).ready(function(){
    $('.defense-hover').mouseover(function(){
        $('.defense-hover').fadeTo('fast', 0.2)

    });

});

$(document).ready(function(){
    $('.defense-hover').mouseleave(function(){
        $('.defense-hover').fadeTo('fast', 0)

    });

});




//goalie hover//

$(document).ready(function(){
    $('.goalie-hover').mouseover(function(){
        $('.goalie-hover').fadeTo('fast', 0.2)

    });

});

$(document).ready(function(){
    $('.goalie-hover').mouseleave(function(){
        $('.goalie-hover').fadeTo('fast', 0)

    });

});



//clubs page//


function badgeHover(team){
  $('#'+team+'-badge').mouseenter(function() {
    $('#'+team+'-badge .inner-badge__lg').slideDown('slow');
  }).mouseleave(function() {
    $('#'+team+'-badge .inner-badge__lg').slideUp('slow');
  });
}

$(document).ready(function(){
  badgeHover('aweber');
  badgeHover('covenant');
  badgeHover('fbc');
  badgeHover('profc');
});
