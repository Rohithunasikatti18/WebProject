$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission
        const formData = $(this).serialize(); // Serialize form data

        $.ajax({
            url: 'submit.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                $('#result').html(`<h3>Submission Successful!</h3>${response}`);
            },
            error: function () {
                $('#result').html('<p style="color: red;">An error occurred. Please try again.</p>');
            }
        });
    });
});
