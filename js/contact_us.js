document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    // Validate name
    const name = document.getElementById("name").value;
    if (name.length < 3) {
      alert("Name must contain at least 3 letters.");
      event.preventDefault();
      return;
    }

    // Validate email
    const email = document.getElementById("email").value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }

    // Validate phone
    const phone = document.getElementById("phone").value;
    if (!/^\d{9,11}$/.test(phone)) {
      alert("Phone number must contain 9 to 11 digits.");
      event.preventDefault();
      return;
    }

    // Validate preferred contact method
    const preferredContactMethod = document.querySelector(
      'input[name="preferred-contact-method"]:checked'
    );
    if (!preferredContactMethod) {
      alert("Please select a preferred contact method.");
      event.preventDefault();
      return;
    }

    // Validate contact days
    const contactDays = document.querySelectorAll(
      'input[name="contact-days"]:checked'
    );
    if (contactDays.length === 0) {
      alert("Please select at least one contact day.");
      event.preventDefault();
      return;
    }

    // Validate message
    const message = document.getElementById("message").value;
    if (message.length < 50 || message.length > 500) {
      alert("Message must contain 50 to 500 letters.");
      event.preventDefault();
      return;
    }

    // If all validations pass
    alert("Form submitted successfully!");
  });
