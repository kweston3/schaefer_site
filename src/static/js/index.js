document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const query = document.getElementById("searchInput").value.toLowerCase();
      const vehicleSections = document.querySelectorAll(".grid > div");

      vehicleSections.forEach((section) => {
        const textContent = section.textContent.toLowerCase();
        if (textContent.includes(query)) {
          section.style.display = "block"; // Show matching vehicles
        } else {
          section.style.display = "none"; // Hide non-matching vehicles
        }
      });
    });
  }
});
