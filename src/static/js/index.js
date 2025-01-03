document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const query = document.getElementById("searchInput").value.toLowerCase().trim();
      const vehicleSections = document.querySelectorAll(".grid > div");
      const allSections = document.querySelectorAll(".container"); // All price sections

      if (query) {
        // Hide all price sections
        allSections.forEach((section) => {
          section.style.display = "none";
        });

        // Create a "Search Results" section if it doesn't already exist
        let searchResultsSection = document.getElementById("searchResults");
        if (!searchResultsSection) {
          searchResultsSection = document.createElement("section");
          searchResultsSection.id = "searchResults";
          searchResultsSection.className = "container mt-10 px-6";
          searchResultsSection.innerHTML = `
            <h2 class="font-bold">Search Results</h2>
            <p id="searchResultsMessage" class="text-gray-500 mt-4"></p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mb-16"></div>
          `;
          form.closest("section").after(searchResultsSection);
        }

        const searchResultsGrid = searchResultsSection.querySelector(".grid");
        const searchResultsMessage = document.getElementById("searchResultsMessage");
        searchResultsGrid.innerHTML = ""; // Clear previous results

        // Filter and show matching vehicles
        let matchCount = 0;
        vehicleSections.forEach((section) => {
          const textContent = section.textContent.toLowerCase();
          if (textContent.includes(query)) {
            matchCount++;
            const clone = section.cloneNode(true); // Clone matching vehicle
            searchResultsGrid.appendChild(clone);
          }
        });

        if (matchCount > 0) {
          searchResultsMessage.textContent = `${matchCount} vehicle${matchCount > 1 ? 's' : ''} found for "${query}".`;
        } else {
          searchResultsMessage.textContent = `No vehicles found for "${query}".`;
        }

        searchResultsSection.style.display = "block"; // Show search results
      } else {
        // If no query, reset to default state
        allSections.forEach((section) => {
          section.style.display = "block";
        });
        const searchResultsSection = document.getElementById("searchResults");
        if (searchResultsSection) {
          searchResultsSection.style.display = "none";
        }
      }
    });
  }
});
