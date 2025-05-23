
  document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); 

    // Collect form data
    var firstName = document.getElementById('firstName').value;
    var lastName  = document.getElementById('lastName').value;
    var userEmail = document.getElementById('email').value;
    var emailSubject = document.getElementById('subject').value;
    var emailMessage = document.getElementById('message').value;

    // Construct the mailto link
    var mailtoLink = 'mailto:booksOpedia7@gmail.com'
                   + '?subject=' + encodeURIComponent(emailSubject)
                   + '&body=' + encodeURIComponent(
                       'Name: ' + firstName + ' ' + lastName + '\n'
                       + 'Email: ' + userEmail + '\n\n'
                       + emailMessage
                   );

    // Open mail client
    window.location.href = mailtoLink;
  };

