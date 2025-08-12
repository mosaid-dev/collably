console.log("hello from script.js!");
const name = "mohamed Saidi";
const age = 23;
const isStudent = true;
console.log("name");
console.log("age");
console.log("isStudent");
    
//console.log(`name: ${name}, age: ${age}, isStudent: ${isStudent}`);
let info = `My name is ${name} and I am ${age} years old.`;
console.log(info);

const favNum1 = 5;
const favNum2 = 10;
const sum = favNum1 + favNum2;
console.log(`The sum of ${favNum1} and ${favNum2} is ${sum }.`);

const product = favNum1 * favNum2;
console.log(`The product of ${favNum1} and ${favNum2} is ${product}.`);

//user profile 
const userProfile = {
    username:"mohamed saidi",
    age: 23,
    isLoggedIn: true,
    skills:["javascript", "css", "html", "html5"],

};
console.log("username:",userProfile.username);
console.log("second skill:", userProfile.skills[1]);

// welcome function
function displayWelcomeMessage(user) {
    const message = `welcome ,${user.username}!`;
    console.log(message);
}

displayWelcomeMessage(userProfile);

//status check function
function checkLoginStatus(profile) {
    if (profile.isLoggedIn) {
        return "user is currently logged in.";
    } else{
        return "user is not  logged in. ";
    }
}

const statusMessage = checkLoginStatus(userProfile);
console.log(statusMessage); 


const themeButton = document.querySelector('#theme-button');
const bodyElement = document.querySelector('body');

function toggleTheme() {
  bodyElement.classList.toggle('dark');

  if (bodyElement.classList.contains('dark')) {
    themeButton.textContent = "Toggle Light Mode";
  } else {
    themeButton.textContent = "Toggle Dark Mode";
  }
}

themeButton.addEventListener('click', toggleTheme);


//  Select Elements
const userCard = document.getElementById("user-card");
const fetchUserButton = document.getElementById("fetch-user-button");

// Define fetchUser function
async function fetchUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data); // Check API structure
    displayUser(data.results[0]);
  } catch (error) {
    console.error("Failed to fetch user:", error);
    userCard.innerHTML = `<p class="text-red-500">Error fetching user. Please try again.</p>`;
  }
}

// Define displayUser function
function displayUser(user) {
  const userHTML = `
    <img src="${user.picture.large}" alt="User photo" 
         class="rounded-full mx-auto border-4 border-white">
    <h2 class="text-xl font-bold mt-2">${user.name.first} ${user.name.last}</h2>
    <p class="text-slate-600">${user.email}</p>
    <p class="text-slate-500">Location: ${user.location.city}, ${user.location.country}</p>
  `;
  userCard.innerHTML = userHTML;
}

//Attach Event Listener + Initial Load
fetchUserButton.addEventListener("click", fetchUser);
fetchUser();


