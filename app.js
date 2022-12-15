// Define variables for HTML elements
let floatingIcon = document.querySelector("#floating-icon");
let mainContainer = document.querySelector("#main-container");

// Add click event listener to floating icon
floatingIcon.addEventListener("click", () => {
  // Show main container
  mainContainer.style.display = "block";
});

// Add voice command listener
window.addEventListener("voicecommand", (event) => {
  // Handle voice command
  if (event.detail.command === "scroll up") {
    window.scrollBy(0, -50);
  }
});

// Add search listener
document.querySelector("#search-form").addEventListener("submit", (event) => {
  // Handle search
  event.preventDefault();
  let searchQuery = document.querySelector("#search-input").value;
  searchGoogle(searchQuery);
});