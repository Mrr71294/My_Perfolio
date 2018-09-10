$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
};


$('#email-icon').click(function() {
  console.log("Hello world");
  $('#contact-me-form').scrollView();
});
