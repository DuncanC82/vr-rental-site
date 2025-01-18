document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");

  bookingForm.addEventListener("submit", (event) => {
    // Prevent form submission if validation fails
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Basic validation
    if (!fullName || !email || !phone) {
      event.preventDefault(); // Stop submission
      formMessage.textContent = "Please fill in your name, email, and phone number.";
      formMessage.style.color = "red";
      return;
    }

    // Optional: You can still log data for debugging
    console.log("Form is valid, proceeding to submission...");
  });
});
