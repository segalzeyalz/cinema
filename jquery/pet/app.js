$('.loc').hover(
  function(){
    $(this).html("<strong>Location:</strong> Your house?")
  },
  function(){
    $(this).html("<strong>Location:</strong> Treehouse Adoption Center?")
  })
$('#add-pet').on('click', function(){
  // Grab info from the form
  let $name =  $('#pet-name');
  let $species =  $('#pet-species');
  let $notes =  $('#pet-notes');

  let $newPet = $(
    '<section class="six columns"><div class="card><p><strong>Name:</strong>' + $name.val() +
    '</p><p><strong>Species:</strong>' + $species.val() +
    '</p><p><strong>Notes:</strong>' + $notes.val() +  
    '</p><span class="close">&times;</span></div></section>')
    $('#posted-pets').append($newPet);
  })
  
  $('img').css('display', 'none').fadeIn(500);
  $('.card').on('click', function(){
    $(this).toggleClass('selected');
  })
  