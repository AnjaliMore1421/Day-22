//  Function to get all users from localStorage
function getUsers() {
  // Convert stored JSON string into JavaScript array
  // If no users exist, return empty array
  return JSON.parse(localStorage.getItem("users")) || [];
}

//  Function to save users into localStorage
function saveUsers(users) {
  // Convert JavaScript array into JSON string before saving
  localStorage.setItem("users", JSON.stringify(users));
}

//  SIGNUP FUNCTION
function signup() {
  // Get input values from signup form
  let u = document.getElementById("newUsername").value;
  let p = document.getElementById("newPassword").value;

  // Fetch existing users
  let users = getUsers();

  //  Check if username already exists
  if (users.find(x => x.username === u)) {
    document.getElementById("signupMsg").innerText = "User exists!";
    return; // Stop execution
  }

  //  Add new user object to users array
  users.push({
    username: u,
    password: p
  });

  // Save updated users list back to localStorage
  saveUsers(users);

  // Show success message
  document.getElementById("signupMsg").innerText = "Signup success!";
}

//  LOGIN FUNCTION
function login() {
  // Get input values from login form
  let u = document.getElementById("username").value;
  let p = document.getElementById("password").value;

  // Fetch stored users
  let users = getUsers();

  //  Check if entered credentials match any user
  let user = users.find(x => x.username === u && x.password === p);

  if (user) {
    //  If valid user:
    // Store login status
    localStorage.setItem("isLoggedIn", "true");

    // Store current logged-in username
    localStorage.setItem("currentUser", u);

    // Redirect to dashboard page
    window.location = "index.html";
  } else {
    //  If invalid credentials
    document.getElementById("error").innerText = "Invalid!";
  }
}
