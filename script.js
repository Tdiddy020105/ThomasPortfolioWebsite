// Function to show the popup
function showPopup() {
    const popup = document.getElementById('hireMePopup');
    popup.style.display = 'block';
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById('hireMePopup');
    popup.style.display = 'none';
  }
  
  // Show the popup every 15 seconds
  setInterval(showPopup, 15000);
  
  // Ensure the popup shows after the first 15 seconds
  setTimeout(showPopup, 15000);
  