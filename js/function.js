$(document).ready(function() {

	// function setHeiHeight() {
	//     $('.full__height').css({
	//         minHeight: $(window).height() + 'px'
	//     });
	// }
	// setHeiHeight(); // устанавливаем высоту окна при первой загрузке страницы
	// $(window).resize( setHeiHeight ); // обновляем при изменении размеров окна


	// Reset link whte attribute href="#"
	$('[href*="#"]').click(function(event) {
		event.preventDefault();
	});

	// Scroll to ID
    $('#main__menu a[href^="#"],#footer__menu a[href^="#"]').click( function(){ 
	    var scroll_el = $(this).attr('href'); 
        if ($(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
	    return false;
    });

	// Stiky menu
    $(document).ready(function(){
        var HeaderTop = $('#header').offset().top;
        
        $(window).scroll(function(){
                if( $(window).scrollTop() > HeaderTop ) {
                        $('#header').addClass('stiky');
                } else {
                        $('#header').removeClass('stiky');
                }
        });
    });

    // Open reviwes
    $('.btn__review').click( function() {
    	$(this).parent('.review__text__column').find('.review__text__rev').toggleClass('open');
    })

    // Sliders
    $('#first_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
        autoplay: true,
        autoplaySpeed: 5000
	});

    $('#sityCampSlider, #outCampSlider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true
	});

	// SUBMIT FORM
    $('form').submit(function(e) {
        var msg = $(this).serialize(),
            $form = $(this);

        e.preventDefault();

        $.ajax({
            type: 'POST',
            data: msg,
            url: $form.attr('action'),
            timeout: 10000,

            beforeSend: function () {
                $('#preloader').fadeIn();
            },

            success: function (data) {
                $('#preloader').fadeOut(function () {
                    $form.find('.result').first().fadeIn().html(data).delay(2000).fadeOut();
                });
            },

            error: function () {
                $('#preloader').fadeOut(function () {
                    $form.find('.result').first().fadeIn().html('Ошибка при отправке сообщения').delay(2000).fadeOut();;
                });
            }
        });
    });

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
	    event.preventDefault();
	    $(this).ekkoLightbox();
	}); 


});