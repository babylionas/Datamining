document.addEventListener("DOMContentLoaded", function() {
    const searchBox = document.querySelector(".search-box");
    const dropdownOptions = document.querySelectorAll(".dropdown-option");
  
    searchBox.addEventListener("input", function() {
      const searchTerm = searchBox.value.toLowerCase();
  
      dropdownOptions.forEach(function(option) {
        const text = option.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
          option.style.display = "block";
        } else {
          option.style.display = "none";
        }
      });
    });
  
    dropdownOptions.forEach(function(option) {
      option.addEventListener("click", function() {
        const value = option.getAttribute("data-value");
        const text = option.textContent;
        console.log("Selected Value:", value);
        console.log("Selected Text:", text);
        // You can perform other actions with the selected value here
      });
    });
  });
  