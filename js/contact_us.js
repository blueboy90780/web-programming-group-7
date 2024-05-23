document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    if (name.length < 3) {
      alert("Name must contain at least 3 letters.");
      event.preventDefault();
      return;
    }

    const email = document.getElementById("email").value;
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }

    const phone = document.getElementById("phone").value;
    if (!/^\d{9,11}$/.test(phone)) {
      alert("Phone number must contain 9 to 11 digits.");
      event.preventDefault();
      return;
    }

    const preferredContactMethod = document.querySelector(
      'input[name="preferred-contact-method"]:checked'
    );
    if (!preferredContactMethod) {
      alert("Please select a preferred contact method.");
      event.preventDefault();
      return;
    }

    const contactDays = document.querySelectorAll(
      'input[name="contact-days"]:checked'
    );
    if (contactDays.length === 0) {
      alert("Please select at least one contact day.");
      event.preventDefault();
      return;
    }

    const message = document.getElementById("message").value;
    if (message.length < 50 || message.length > 500) {
      alert("Message must contain 50 to 500 letters.");
      event.preventDefault();
      return;
    }

    alert("Form submitted successfully!");
  });
