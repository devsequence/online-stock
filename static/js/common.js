$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() >= 1) {
        $header.addClass('scroll-nav');
    }
    else{
        $header.removeClass('scroll-nav');
    }
});
// $(document).mouseup(function (e){
//     var div = $('.header-lang');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         $(div).removeClass('open');
//     }
// });
// $('.header-lang__title').on('click', function (e) {
//     var $this = $(this);
//     var $thisParent  = $this.parent();
//     $thisParent.toggleClass('open');
// });
//
// $('.header-btn').on('click', function (e) {
//     var $this = $(this);
//     $this.toggleClass('open');
//     $('.header-mobile').toggleClass('open');
//     $('body').toggleClass('scroll-h');
//     $('.header-overlay').toggleClass('open');
// });
//
// $('.header-overlay').on('click', function (e) {
//     var $this = $(this);
//     $this.toggleClass('open');
//     $('.header-mobile').toggleClass('open');
//     $('body').toggleClass('scroll-h');
//     $('.header-btn').toggleClass('open');
// });
//
// var swiper = new Swiper(".hero-slider", {
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });
$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('open').find('.icon').toggleClass('hidden');
    $('.header .btn-register, .header-nav').toggleClass('open');
    $('body').toggleClass('scroll-h');
});
$('.header-nav a').click(function(e) {
    var headerHeight = $('header').outerHeight(); // Target your header navigation here
    var targetHref   = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
    }, 1000);
    $('.header-btn').toggleClass('open').find('.icon').toggleClass('hidden');
    $('.header .btn-register, .header-nav').toggleClass('open');
    $('body').removeClass('scroll-h');
    e.preventDefault();
});