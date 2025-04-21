$('#contactForm').on('submit', function (e) {
  e.preventDefault();

  $.ajax({
    url: 'contact.php',
    type: 'POST',
    data: $(this).serialize(),
    success: function () {
      alert('Message sent successfully!');
      $('#contactForm')[0].reset();
    },
    error: function () {
      alert('Something went wrong. Please try again later.');
    },
  });
});
