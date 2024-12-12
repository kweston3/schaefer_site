// Registering the custom image widget
CMS.registerWidget("imageWithValidation", {
  // Widget initialization
  init: function () {
    // Access the widget input element (file input)
    const input = this.widgetValue;
    input.addEventListener("change", this.validateSize.bind(this));
  },

  // Function to validate the file size
  validateSize: function (event) {
    const file = event.target.files[0]; // Get the selected file
    if (file && file.size > 3 * 1024 * 1024) {
      // 3MB in bytes
      alert("File size exceeds 3MB!"); // Show an alert
      event.target.value = ""; // Clear the input field if the file is too large
    }
  },
});
