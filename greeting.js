// Get New Date Object
let today = new Date();
// Find the current hour
let hourNow = today.getHours();
let greeting;

// Display the correct grreting based on the current time
if (hourNow > 18) {
  greeting = "Good Evening";
} else if (hourNow > 12) {
  greeting = "Good Afternoon";
} else if (hourNow > 0) {
  greeting = "Good Morning";
} else {
  greeting = "Welcome";
}
document.write(greeting);
