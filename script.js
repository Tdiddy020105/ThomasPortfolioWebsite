// Function to show the "Hire Me" popup
function showHireMePopup() {
  const popup = document.getElementById('hireMePopup');
  popup.style.display = 'block';
}

function copyEmailToClipboard() {
  const email = "thomas@dielesen.eu"; 
  navigator.clipboard.writeText(email)
    .then(() => {
      alert("My email has been copied to your clipboard: " + email);
    })
    .catch(() => {
      alert("Failed to copy email. Please try again!");
    });
}

// Function to close the "Hire Me" popup
function closeHireMePopup() {
  const popup = document.getElementById('hireMePopup');
  popup.style.display = 'none';
}

// Show the "Hire Me" popup every 15 seconds
setTimeout(showHireMePopup, 5000); // Show after 5 seconds initially
setInterval(showHireMePopup, 15000); // Repeat every 15 seconds

function revealFunFact(element, factText) {
  element.innerHTML = factText;
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

function navigateToGallery() {
  window.location.href = "gallery.html"; // Replace with the actual gallery HTML file
}






