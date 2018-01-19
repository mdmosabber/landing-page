$(document).ready(function () {

  $("#gallery-1").mouseover(function () {
      $('#shadow').slideDown(function () {
          $(this).mouseout(function () {
              $('#shadow').slideUp()
          })
      })
    })

    $('#gallery-2').mousemove(function () {
        $('#shadow-2').slideDown(function () {
            $(this).mouseout(function () {
                $('#shadow-2').slideUp()
            })
        })
    })
    $('#gallery-3').mouseover(function () {
        $('#shadow-3').slideDown(function () {
            $(this).mouseout(function () {
                $('#shadow-3').slideUp()
            })
        })
    })
    $('#gallery-4').mouseover(function () {
        $('#shadow-4').slideDown(function () {
            $(this).mouseout(function () {
                $('#shadow-4').slideUp()
            })
        })
    })
    $('#gallery-5').mouseover(function () {
        $('#shadow-5').slideDown(function () {
            $(this).mouseout(function () {
                $('#shadow-5').slideUp()
            })
        })
    })
    $('#gallery-6').mouseover(function () {
        $('#shadow-6').slideDown(function () {
            $(this).mouseout(function () {
                $('#shadow-6').slideUp()
            })
        })
    })

    $('.container').resize(function() {
        var getWidth = $('.col-md-4').width();
        var getHeight = $('.col-md-4').height();

        $('..main-menu-area:before').css({
            'width':getWidth,
            'height':getHeight,

        });
    });




});
