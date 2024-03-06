// Airline dropdown backend
const searchBoxAirline = document.querySelector('.search-box-airline');
const dropdownListAirline = document.querySelector('.dropdown-list-airline');
const optionsAirline = Array.from(dropdownListAirline.getElementsByTagName('li'));

// Departure dropdown backend
const searchBoxDeair = document.querySelector('.search-box-deair');
const dropdownListDeair = document.querySelector('.dropdown-list-deair');
const optionsDeair = Array.from(dropdownListDeair.getElementsByTagName('li'));

// Show dropdown and filter options based on search input - Airline
searchBoxAirline.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  dropdownListAirline.style.display = 'block';
  optionsAirline.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
});

// Handle option selection - Airline
optionsAirline.forEach(option => {
  option.addEventListener('click', function() {
    const selectedOption = this.textContent;
    searchBoxAirline.value = selectedOption;
    dropdownListAirline.style.display = 'none';
  });
});

// Show dropdown and filter options based on search input - Departure
searchBoxDeair.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  dropdownListDeair.style.display = 'block';
  optionsDeair.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
});

// Handle option selection - Departure
optionsDeair.forEach(option => {
  option.addEventListener('click', function() {
    const selectedOption = this.textContent;
    searchBoxDeair.value = selectedOption;
    dropdownListDeair.style.display = 'none';
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const confirmButtons = document.querySelectorAll(".confirm-btn");
  const confirmAllButton = document.querySelector(".confirm-all-btn");

  confirmButtons.forEach(button => {
      button.addEventListener("click", function() {
          console.log("Confirmed:", button.parentElement.textContent.trim());
      });
  });

  confirmAllButton.addEventListener("click", function() {
      const selectedAirline = document.querySelector(".airline .search-box-airline").value;
      const selectedDeparture = document.querySelector(".de-air .search-box-deair").value;
      const selectedTime = document.querySelector(".time-de .search-box-deair").value;
      const selectedDestination = document.querySelector(".des-air .search-box-deair").value;

      console.log("Airline:", selectedAirline);
      console.log("Departure:", selectedDeparture);
      console.log("Time:", selectedTime);
      console.log("Destination:", selectedDestination);

      // ตรวจสอบว่าทุก dropdown ถูกเลือกค่าหรือยัง
      if (selectedAirline && selectedDeparture && selectedTime && selectedDestination) {
          console.log("All fields are selected!");
          // ดำเนินการต่อที่นี่ เช่น ส่งข้อมูลไปยัง API หรือทำการ redirect
      } else {
          console.log("Please select all fields!");
      }
  });
});


