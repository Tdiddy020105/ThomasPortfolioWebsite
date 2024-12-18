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

// Functionality for flying trash icon
const flyingTrash = document.getElementById('flyingTrash');

function moveTrashRandomly() {
  const x = Math.floor(Math.random() * (window.innerWidth - 50));
  const y = Math.floor(Math.random() * (window.innerHeight - 50));
  flyingTrash.style.left = `${x}px`;
  flyingTrash.style.top = `${y}px`;
}

function showCleanUpMessage() {
  alert('Thanks for keeping the planet clean!');
  moveTrashRandomly();
}

flyingTrash.addEventListener('click', showCleanUpMessage);

setInterval(moveTrashRandomly, 15000);
moveTrashRandomly(); // Initial placement





