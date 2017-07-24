$('.popUpBg').on('mousemove', function (e) {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var clientX = e.clientX;
    var clientY = e.clientY;
    var hMiddle = windowWidth / 2;
    var vMiddle = windowHeight / 2;
    var newYValue = ((clientX - hMiddle) / 40);
    var newXValue = ((clientY - vMiddle) / 20);
    $('.popUpBody').css({ transform: 'translate(-50%, -50%) rotateX(' + newXValue + 'deg) rotateY(' + newYValue + 'deg)' });
});
