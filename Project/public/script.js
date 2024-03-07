//Model
let loadedModel;

// โหลดโมเดล AI จากไฟล์ JSON
async function loadModel() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/babylionas/Datamining/b14bee020fda3dacbfd54a2178f67112f65e3199/model/best_model_params.json');
    const modelJson = await response.json();

    // นำเข้า TensorFlow.js ให้ถูกต้อง (ไม่ต้องใช้ require หรือ @tensorflow/tfjs-node)
    const tf = window.tf;
    
    // แปลงโมเดล JSON เป็น ModelArtifacts
    const modelArtifacts = {
      modelTopology: modelJson,
      format: 'layers-model',
    };

    // สร้างโมเดล AI จาก ModelArtifacts
    loadedModel = await tf.loadLayersModel(tf.io.fromMemory(modelArtifacts));

    // เมื่อโมเดลโหลดเสร็จสามารถใช้งานได้ตามต้องการ
    console.log('Model loaded successfully:', loadedModel);

    return loadedModel;
  } catch (error) {
    console.error('Error loading model:', error);
    return null;
  }
}

// เรียกใช้ฟังก์ชัน loadModel เพื่อโหลดโมเดล AI
loadModel();



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
  
  // ตรวจสอบช่วงเวลา AM หรือ PM และปรับค่านาทีให้เป็นเวลาที่ถูกต้อง
  if (period === 'PM' && hour !== 12) {
      totalMinutes += 12 * 60; // เพิ่ม 12 ชั่วโมงในกรณีที่เป็น PM และไม่ใช่เที่ยงคืน
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
  
        // เตรียมข้อมูล input สำหรับทำนาย
        const inputData = [selectedAirline, selectedDeparture, selectedTime, selectedDestination];
  
        // ทำการทำนายด้วยโมเดล AI
        const prediction = makePrediction(loadedModel, inputData);
        console.log("Prediction:", prediction);
        
        // ดำเนินการต่อที่นี่ เช่น ส่งข้อมูลไปยัง API หรือทำการ redirect
    } else {
        console.log("Please select all fields!");
    }
  });

});

// ฟังก์ชันสำหรับทำนายด้วยโมเดล AI
function makePrediction(model, inputData) {
  // ตรวจสอบข้อมูล input และปรับให้เป็นรูปแบบที่โมเดล AI รับเข้ามาได้
  // สำหรับตัวอย่างนี้เราจะสมมติว่าโมเดล AI รับข้อมูลเป็น array ของขนาด 4
  
  // สำหรับตัวอย่างเพื่อเทส
  // ให้เขียนโค้ดเพิ่มเองเพื่อแปลงข้อมูล input เป็นรูปแบบที่โมเดล AI รับได้
  // เช่น การทำ One-hot encoding หรือ normalization

  // ส่งข้อมูล input เข้าโมเดล AI สำหรับทำนาย
  const inputDataTensor = tf.tensor2d([inputData]); // สมมติว่าโมเดล AI รับข้อมูลเป็น tensor ขนาด 1x4
  const prediction = model.predict(inputDataTensor);
  
  // แปลงผลลัพธ์ที่ได้เป็น JavaScript array
  const predictionArray = Array.from(prediction.dataSync());
  
  return predictionArray;
}

function normalization( ){

}
