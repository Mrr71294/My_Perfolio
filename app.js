$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
};


$('#email-icon').click(function() {
  $('#contact-me-form').scrollView();
  toggleSocialList();
});


function toggleSocialList() {
    $(".hamburger-icon").toggleClass("change");
    $(".social-links").toggle();
}

$('.hamburger-icon').click(function() {
  toggleSocialList();
});
