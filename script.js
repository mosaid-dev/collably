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
    skills:["javascript", "python", "html", "css"]

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