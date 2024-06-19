function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// overlay menu
function openNav() {
  document.getElementById("nav").classList.toggle("menu_width");
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}

// Function to scroll to specific sections
function scrollToSection(id) {
  var section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Function to close the overlay
function closeOverlay() {
  document.getElementById('nav').classList.remove('menu_width'); // Remove the overlay width
  document.querySelector(".custom_menu-btn").classList.remove("menu_btn-style"); // Reset button style
}

// Add event listeners to the menu items
document.querySelectorAll('.overlay-content a').forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    var targetId = item.getAttribute('href').substring(1); // Get target section id
    scrollToSection(targetId); // Scroll to the target section
    closeOverlay(); // Close the overlay
  });
});