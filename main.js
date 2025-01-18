document.addEventListener("DOMContentLoaded", () => {
  const bookingForm = document.getElementById("bookingForm");

  // Listen for form submission
  bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(bookingForm);

    // Basic validation
    if (!formData.get("fullName") || !formData.get("email") || !formData.get("phone")) {
      showToast("Please fill in your name, email, and phone number.", 4000);
      return;
    }

    try {
      // Send the POST request to Netlify (the site itself, "/")
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Show success toast
        showToast("Thank you! Your booking request has been received.", 4000);

        // Optionally clear the form
        bookingForm.reset();

        // If you want to redirect after showing toast, uncomment:
        // setTimeout(() => {
        //   window.location.href = "/thank-you.html";
        // }, 2000);

      } else {
        showToast("Oops! Something went wrong. Please try again.", 4000);
      }
    } catch (error) {
      console.error(error);
      showToast("Error submitting form. Please try again later.", 4000);
    }
  });
});

/**
 * Display a toast notification
 * @param {string} message - Toast message
 * @param {number} duration - Time in ms before toast disappears
 */
function showToast(message, duration = 4000) {
  const toastContainer = document.getElementById("toast-container");

  // Create toast element
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = message;

  // Append to container
  toastContainer.appendChild(toast);

  // Remove toast after the specified duration
  setTimeout(() => {
    toast.remove();
  }, duration);
}
