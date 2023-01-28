
  var current_fs, next_fs, previous_fs; //fieldsets
  var opacity;

  function nextForm(){

      current_fs = $('.next').parent();
      next_fs = $('.next').parent().next();

      //Add Class Active
      $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

      //show the next fieldset
      next_fs.show();
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 + now;

              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              next_fs.css({'opacity': opacity,

            });
          },
          duration: 600
      });
  }



  function previousForm(){

      current_fs = $('.previous').parent();
      previous_fs = $('.previous').parent().prev();

      //Remove class active
      $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

      //show the previous fieldset
      previous_fs.show();

      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
          step: function(now) {
              // for making fielset appear animation
              opacity = 1 - now;

              current_fs.css({
                  'display': 'none',
                  'position': 'relative'
              });
              previous_fs.css({'opacity': opacity,
              'display': 'block',
              'position': 'relative'});
          },
          duration: 600
      });
  }

  $('.radio-group .radio').click(function(){
      $(this).parent().find('.radio').removeClass('selected');
      $(this).addClass('selected');
  });

  $(".submit").click(function(){
      return false;
  })

