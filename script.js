  // Function to show the "Hire Me" popup
  function showHireMePopup() {
    const popup = document.getElementById('hireMePopup');
    popup.style.display = 'block';
  }

  // Function to close the "Hire Me" popup
  function closeHireMePopup() {
    const popup = document.getElementById('hireMePopup');
    popup.style.display = 'none';
  }

  // Show the popup every 15 seconds
  setTimeout(showHireMePopup, 5000); // Show after 5 seconds initially
  setInterval(showHireMePopup, 15000); // Show every 15 seconds

// Project Popup Functionality
function showProjectPopup(title, description) {
  const popup = document.getElementById('projectPopup');
  document.getElementById('projectTitle').textContent = title;
  document.getElementById('projectDescription').textContent = description;
  popup.style.display = 'block';
}

function closeProjectPopup() {
  const popup = document.getElementById('projectPopup');
  popup.style.display = 'none';
}



