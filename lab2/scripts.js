document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission
  
  // Retrieve user inputs
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const dob = document.getElementById('dob').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;
  const address = document.getElementById('address').value;

  // Display the data
  document.getElementById('displayFirstName').textContent = firstName;
  document.getElementById('displayLastName').textContent = lastName;
  document.getElementById('displayDob').textContent = dob;
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayEmail').textContent = email;
  document.getElementById('displayGender').textContent = gender;
  document.getElementById('displayAddress').textContent = address;

  // Show the result section
  document.getElementById('result').classList.remove('hidden');
});