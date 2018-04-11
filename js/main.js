$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

countNumber = function() {
    $('.counter').each(function () {
        var $this = $(this),
            countTo = $this.attr('data-count'),
            txtNumber = $this.children();

        $({ countNum: txtNumber.text() }).animate(
            {
                countNum: countTo
            },
            {
                duration: 1500,
                easing: 'linear',
                step: function () {
                    txtNumber.text(Math.floor(this.countNum));
                },
                complete: function () {
                    txtNumber.text(this.countNum);
                }
            }
        );
    });
}

resizeItem = function(el) {
    
    $.each(el, function(index, value){
        var item = value.width();
        var font = item / el[index].length + 'px';

        if (value.hasClass('noHeight')) {
            value.css({ 'width': item  });
        } else {
            value.css({ 'width': item, 'height': item, 'font-size': font });
        }

    })
    
}

$(document).ready(function () {
    var bannerImage = $('.bannerImg');
    var countElement = $('.counter');
    var elResize = [bannerImage, countElement]

    var listCount = $('.listCount');

    resizeItem(elResize)

    if (listCount.isInViewport()) {
        countNumber();
    }

    $(window).resize(function () {
            
        $.each(elResize, function (index, value) {

            value.removeAttr('style');
            
        });

        resizeItem(elResize);


    }).scroll(function () {

        if ( listCount.isInViewport() && $('.counter:first').text() == 0 ) {
            countNumber();
        }

    });
});