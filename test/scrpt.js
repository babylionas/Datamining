const searchBox = document.querySelector('.search-box');
const dropdownList = document.querySelector('.dropdown-list');
const options = Array.from(dropdownList.getElementsByTagName('li'));

// Show dropdown and filter options based on search input
searchBox.addEventListener('input', function() {
  const searchValue = this.value.toLowerCase();
  dropdownList.style.display = 'block';
  options.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchValue)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
});

// Handle option selection
options.forEach(option => {
  option.addEventListener('click', function() {
    const selectedOption = this.textContent;
    searchBox.value = selectedOption;
    dropdownList.style.display = 'none';
  });
});
