// Protect page
if(localStorage.getItem("isLoggedIn")!=="true"){
  window.location="login.html";
}

// Welcome
document.getElementById("welcome").innerText =
  "Welcome " + localStorage.getItem("currentUser");

// Logout
function logout(){
  localStorage.clear();
  window.location="login.html";
}

// Theme
let btn=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}

btn.onclick=()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",
    document.body.classList.contains("dark")?"dark":"light");
}

// Pages
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Users list
function loadUsers(){
  let users=JSON.parse(localStorage.getItem("users"))||[];
  let list=document.getElementById("userList");

  list.innerHTML="";

  users.forEach(u=>{
    let div=document.createElement("div");
    div.className="user-item";
    div.innerText="👤 "+u.username;
    list.appendChild(div);
  });
}

loadUsers();
