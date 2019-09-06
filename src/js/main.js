
    $(document).ready(function(){
      $( "#btn" ).click(function() {

          $("#btn__block").slideToggle('slow', function(){
            
          });
        });
        
        $('.scrolling__link').click(function() {
    
          $('html, body').animate({
            scrollTop: 0
          }, 1000);
          return false;
        });

        $('#hamburger').click(function(e) {
          e.stopPropagation();
            $('.menu__mobile').slideToggle('fast', function(){
              $('.burger').css('background', '#fff');
              if($(this).css('display') === 'none') {
                $('.burger').css('background', 'black');
              }
            });
          });

          $('#hamburger').click(function(){
            $(this).toggleClass('open');
            
          });

          $(document).click(function(e) {
            var menu = $('.menu__mobile');
              if (menu.has(e.target).length === 0) {
                menu.hide();
                $('.burger').css('background', 'black');
                $('#hamburger').removeClass('open');
              }
          })

            $('.product__main--BtnAll').click(function(){
              $('.overlay').fadeIn(400,
                function(){
                  $('.modal').css('display', 'block')
                  .animate({opacity: 1}, 200);
                });
              });
          
              $('.fa-times, .overlay').click(function(){
                $('.modal').animate({opacity:0}, 200, 
                  function(){
                    $(this).css('display', 'none');
                    $('.overlay').fadeOut(400);
                  });
              });
          });
