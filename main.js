document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");
    const formMessage = document.getElementById("formMessage");
  
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Retrieve form field values
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const selectedPackage = document.getElementById("package").value;
      const date = document.getElementById("date").value;
      const message = document.getElementById("message").value.trim();
  
      // Basic validation
      if (!fullName || !email || !phone) {
        alert("Please fill in your name, email, and phone number.");
        return;
      }
  
      // Construct booking data object
      const bookingData = {
        fullName,
        email,
        phone,
        selectedPackage,
        date,
        message
      };
  
      // For demonstration, just log the data
      console.log("Booking Data:", bookingData);
  
      // Show success message
      formMessage.textContent = "Thank you for your request! We will get in touch soon.";
      formMessage.style.color = "green";
  
      // Reset form
      bookingForm.reset();
    });
  });
  