// Airline dropdown backend
const searchBoxAirline = document.querySelector('.search-box-airline');
const dropdownListAirline = document.querySelector('.dropdown-list-airline');
const optionsAirline = Array.from(dropdownListAirline.getElementsByTagName('li'));

// Departure dropdown backend
const searchBoxDeair = document.querySelector('.search-box-deair');
const dropdownListDeair = document.querySelector('.dropdown-list-deair');
const optionsDeair = Array.from(dropdownListDeair.getElementsByTagName('li'));

// Destination dropdown backend
const searchBoxDesair = document.querySelector('.search-box-desair');
const dropdownListDesair = document.querySelector('.dropdown-list-desair');
const optionsDesair = Array.from(dropdownListDesair.getElementsByTagName('li'));

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

// Show dropdown and filter options based on search input - Departure
searchBoxDesair.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  dropdownListDesair.style.display = 'block';
  optionsDesair.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
});

// Handle option selection - Departure
optionsDesair.forEach(option => {
  option.addEventListener('click', function() {
    const selectedOption = this.textContent;
    searchBoxDesair.value = selectedOption;
    dropdownListDesair.style.display = 'none';
  });
});



//Time on departure - ACTION 

const timeInput = document.querySelector('.search-box-timede');

if (timeInput) {
    timeInput.addEventListener('input', () => {
        handleTimeInput(timeInput.value);
    });
}

function handleTimeInput(input) {
    if (input.trim() !== '') {
        const minutes = convertToMinutes(input);
        
        const dropdownList = document.querySelector('.timede-ddn'); // แก้จาก .dropdown-list-timede เป็น .timede-ddn
        if (dropdownList) {
            dropdownList.innerHTML = `<li>${minutes} minutes</li>`;
        }
    }
}

function convertToMinutes(time) {
    const [timeStr, period] = time.split(' '); // แยกเวลาและช่วงเวลา (AM/PM)
    const [hour, minute] = timeStr.split(':').map(item => parseInt(item)); // แยกชั่วโมงและนาที
    
    // คำนวณชั่วโมงและนาทีให้เป็นนาทีทั้งหมด
    let totalMinutes = hour * 60 + minute;
    
    // หากเป็นช่วง PM และไม่ใช่เที่ยงคืน
    if (period === 'PM' && hour !== 12) {
        totalMinutes += 12 * 60; // เพิ่ม 12 ชั่วโมงในกรณีที่เป็น PM
    } else if (period === 'AM' && hour === 12) {
        totalMinutes -= 12 * 60; // ลบ 12 ชั่วโมงในกรณีที่เป็น AM และเป็นเที่ยงคืน
    }
    
    return totalMinutes;
} 

const selectedAirlineInput = document.querySelector(".airline .search-box-airline");
const selectedDepartureInput = document.querySelector(".de-air .search-box-deair");
const selectedTimeInput = document.querySelector(".time-de .search-box-timede"); // Fix class name
const selectedDestinationInput = document.querySelector(".des-air .search-box-desair"); // Fix class name

// Check if elements exist before accessing their value
const selectedAirline = selectedAirlineInput ? selectedAirlineInput.value : null;
const selectedDeparture = selectedDepartureInput ? selectedDepartureInput.value : null;
const selectedTime = selectedTimeInput ? selectedTimeInput.value : null;
const selectedDestination = selectedDestinationInput ? selectedDestinationInput.value : null;

console.log("Airline:", selectedAirline);
console.log("Departure:", selectedDeparture);
console.log("Time:", selectedTime);
console.log("Destination:", selectedDestination);

if (selectedAirline && selectedDeparture && selectedTime && selectedDestination) {
    console.log("All fields are selected!");
    // Proceed with further actions
} else {
    console.log("Please select all fields!");
}




//Button action

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
    const selectedTime = document.querySelector(".time-de .search-box-timede").value;
    const selectedDestination = document.querySelector(".des-air .search-box-desair").value;

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


