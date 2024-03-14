//Model
let loadedModel;

let output = document.querySelector('.output .modal__content');

let model;
// โหลด JSON โมเดล
// เพิ่ม import
async function loadModel() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/babylionas/Datamining/main/model/best_model_params.json');
    if (!response.ok) {
      throw new Error('Failed to load model JSON');
    }
    const modelData = await response.json();
    console.log('Model loaded successfully:', modelData);
    
    // ทำสิ่งที่ต้องการกับข้อมูลโมเดลที่โหลด เช่น ใช้ในการทำนาย
    // ตัวอย่างการใช้งาน:
    const bootstrap = modelData.bootstrap;
    const criterion = modelData.criterion;
    const maxDepth = modelData.max_depth;
    const minSamplesLeaf = modelData.min_samples_leaf;
    const minSamplesSplit = modelData.min_samples_split;
    const nEstimators = modelData.n_estimators;

    

    console.log('Bootstrap:', bootstrap);
    console.log('Criterion:', criterion);
    console.log('Max Depth:', maxDepth);
    console.log('Min Samples Leaf:', minSamplesLeaf);
    console.log('Min Samples Split:', minSamplesSplit);
    console.log('Number of Estimators:', nEstimators);

  } catch (error) {
    console.error('Error loading the model:', error);
  }
}

// เรียกใช้ฟังก์ชันโหลดโมเดล
loadModel();

// ฟังก์ชันทำนายผลลัพธ์จากโมเดล
function makePrediction(inputData) {
  let prediction = modelData.predict(inputData);
  console.log('Prediction:', prediction);
  return prediction;
}


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
  
  // Filter options based on search input
  const filteredOptions = optionsAirline.filter(option => {
    const text = option.textContent.toLowerCase();
    return text.includes(searchValue);
  });

  // Clear previous list items
  dropdownListAirline.innerHTML = '';

  // If no data found, display "no data"
  if (filteredOptions.length === 0) {
    const noDataItem = document.createElement('li');
    noDataItem.textContent = 'No data';
    dropdownListAirline.appendChild(noDataItem);
  } else {
    // Populate dropdown with filtered options
    filteredOptions.forEach(option => {
      dropdownListAirline.appendChild(option);
    });
  }
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

  // Filter options based on search input
  const filteredOptions = optionsDeair.filter(option => {
    const text = option.textContent.toLowerCase();
    return text.includes(searchValue);
  });

  // Clear previous list items
  dropdownListDeair.innerHTML = '';

  // If no data found, display "no data"
  if (filteredOptions.length === 0) {
    const noDataItem = document.createElement('li');
    noDataItem.textContent = 'No data';
    dropdownListDeair.appendChild(noDataItem);
  } else {
    // Populate dropdown with filtered options
    filteredOptions.forEach(option => {
      dropdownListDeair.appendChild(option);
    });
  }
});

// Handle option selection - Departure
optionsDeair.forEach(option => {
  option.addEventListener('click', function() {
    const selectedOption = this.textContent;
    searchBoxDeair.value = selectedOption;
    dropdownListDeair.style.display = 'none';
  });
});

// Show dropdown and filter options based on search input - Destination
searchBoxDesair.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  dropdownListDesair.style.display = 'block';

  // Filter options based on search input
  const filteredOptions = optionsDesair.filter(option => {
    const text = option.textContent.toLowerCase();
    return text.includes(searchValue);
  });

  // Clear previous list items
  dropdownListDesair.innerHTML = '';

  // If no data found, display "no data"
  if (filteredOptions.length === 0) {
    const noDataItem = document.createElement('li');
    noDataItem.textContent = 'No data';
    dropdownListDesair.appendChild(noDataItem);
  } else {
    // Populate dropdown with filtered options
    filteredOptions.forEach(option => {
      dropdownListDesair.appendChild(option);
    });
  }
});

// Handle option selection - Destination
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
  
  // ตรวจสอบช่วงเวลา AM หรือ PM และปรับค่านาทีให้เป็นเวลาที่ถูกต้อง
  if (period === 'PM' && hour !== 12) {
      totalMinutes += 12 * 60; // เพิ่ม 12 ชั่วโมงในกรณีที่เป็น PM และไม่ใช่เที่ยงคืน
  } else if (period === 'AM' && hour === 12) {
      totalMinutes -= 12 * 60; // ลบ 12 ชั่วโมงในกรณีที่เป็น AM และเป็นเที่ยงคืน
  }
  
  return totalMinutes;
}

// ฟังก์ชันที่ใช้ในการหา index ของรายการที่เลือก
function findIndexInListAirline(selectedValue) {
  const dropdownList = document.querySelector('.dropdown-list-airline');
  const options = Array.from(dropdownList.getElementsByTagName('li'));

  // ใช้ findIndex ของ Array ในการหา index ของรายการที่เลือก
  const index = options.findIndex(option => option.textContent.trim() === selectedValue);

  return index;
}

// ฟังก์ชันที่ใช้ในการหา index ของรายการที่เลือก
function findIndexInListDeairline(selectedValue) {
  const dropdownList = document.querySelector('.dropdown-list-deair');
  const options = Array.from(dropdownList.getElementsByTagName('li'));

  // ใช้ findIndex ของ Array ในการหา index ของรายการที่เลือก
  const index = options.findIndex(option => option.textContent.trim() === selectedValue);

  return index;
}

// ฟังก์ชันที่ใช้ในการหา index ของรายการที่เลือก
function findIndexInListDesairline(selectedValue) {
  const dropdownList = document.querySelector('.dropdown-list-desair');
  const options = Array.from(dropdownList.getElementsByTagName('li'));

  // ใช้ findIndex ของ Array ในการหา index ของรายการที่เลือก
  const index = options.findIndex(option => option.textContent.trim() === selectedValue);

  return index;
}



//Button action

document.addEventListener("DOMContentLoaded", function() {
  const confirmAllButton = document.querySelector(".button a");
  const outputElement = document.getElementById('.modal__content');
      // ต้องการให้ใช้ closeBtn แทน 'closePredictionOutput'
    const closeBtn = document.getElementById('closePredictionOutput');

    closeBtn.addEventListener('click', function() {
      outputElement.style.display = 'none';
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
  
        // ทำการ normalize ค่าที่ได้จาก dropdown ของ airline, departure, และ destination เป็น index ของ list
        const airlineIndex = findIndexInListAirline(selectedAirline);
        const departureIndex = findIndexInListDeairline(selectedDeparture);
        const destinationIndex = findIndexInListDesairline(selectedDestination);

        console.log("Airline Index:", airlineIndex);
        console.log("Departure Index:", departureIndex);
        console.log("Destination Index:", destinationIndex);

        console.log("Time :" , selectedTime);

        // ทำการ normalize ค่าของเวลา (time) เป็นนาที

        const maxTime =  1439;
        const minTime = 10;
        const beforenalizedTime = convertToMinutes(selectedTime);
        let normalizedTime = (beforenalizedTime-minTime) / (maxTime-minTime);
        const resultNormalizeTime = normalizedTime; 
        console.log("Normalized Time (minutes):", resultNormalizeTime);

        // เตรียมข้อมูล input สำหรับทำนาย
        const inputData = [airlineIndex, departureIndex,  destinationIndex, resultNormalizeTime];
  

        // ทำการทำนายด้วยโมเดล AI
        const prediction = makePrediction([inputData]);
        console.log("Prediction:", prediction);

        // แสดงผลลัพธ์การทำนาย
        changeDetailOutput(prediction);



    } else {
        console.log("Please select all fields!");
    }
  });

});

function changeDetailOutput(prediction) {
  //const outputElement = document.querySelector('.output');
  const delayElement = document.querySelector('.delay');
  const nodelayElement = document.querySelector('.nodelay');

  if (prediction === 0) {
    // แสดงเฉพาะคลาสที่ต้องการ
    delayElement.style.display = 'none'; // ซ่อน delay
    nodelayElement.style.display = 'block'; // แสดง nodelay
  } else if (prediction === 1) {
    // แสดงเฉพาะคลsาสที่ต้องการ
    nodelayElement.style.display = 'none'; // ซ่อน nodelay
    delayElement.style.display = 'block'; // แสดง delay
  }
}







  