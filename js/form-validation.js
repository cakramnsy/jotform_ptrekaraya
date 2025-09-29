document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll(".jf-required input, .jf-required textarea, .jf-required select");

  inputs.forEach(function(input) {
    const errorMessage = input.closest(".form-line").querySelector(".form-error-message");

    if (errorMessage) {
      // Run once on load
      toggleError(input, errorMessage);

      // Run on input
      input.addEventListener("input", function() {
        toggleError(input, errorMessage);
      });
    }
  });

  function toggleError(input, errorMessage) {
    if (!input.checkValidity() || !input.value.trim()) {
      errorMessage.style.display = "block";
    } else {
      errorMessage.style.display = "none";
    }
  }
});
