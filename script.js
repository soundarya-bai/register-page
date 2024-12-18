$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
  
        // Perform client-side validation if needed
        // For example, check if all fields are filled
  
        // Submit the form using AJAX
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            data: $(this).serialize(),
            success: function(response) {
                // Display the response from the server
                $('body').html(response);
            },
            error: function() {
                alert('An error occurred. Please try again.');
            }
        });
    });
  });