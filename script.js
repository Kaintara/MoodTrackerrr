// Simple login credentials (hardcoded for demo)
const credentials = {
 username: "demo",
 password: "1234"
};

// Login elements
const loginScreen = document.getElementById("login-screen");
const appScreen = document.getElementById("app-screen");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginError = document.getElementById("login-error");

loginBtn.onclick = () => {
 const user = document.getElementById("username").value;
 const pass = document.getElementById("password").value;

 if (user === credentials.username && pass === credentials.password) {
 loginScreen.style.display = "none";
 appScreen.style.display = "block";
 loginError.innerText = "";
 initializeMoodApp();
 } else {
 loginError.innerText = "Incorrect username or password";
 }
};

logoutBtn.onclick = () => {
 appScreen.style.display = "none";
 loginScreen.style.display = "block";
 document.getElementById("username").value = "";
 document.getElementById("password").value = "";
 document.getElementById("mood-output").innerHTML = "";
 document.body.style.backgroundColor = "white";
};

// Mood data: images + Spotify links
const moods = {
 Happy: {
 img: "assets/happy.jpg",
 spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"
 },
 Sad: {
 img: "assets/sad.jpg",
 spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1"
 },
 Angry: {
 img: "assets/angry.jpg",
 spotify: "https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634"
 },
 Calm: {
 img: "assets/calm.jpg",
 spotify: "https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO"
 }
};

// Initialize MoodTrackr app after login
function initializeMoodApp() {
 const moodButtonsDiv = document.getElementById("mood-buttons");
 moodButtonsDiv.innerHTML = ""; // Clear any existing buttons
 for (let mood in moods) {
 const btn = document.createElement("button");
 btn.innerText = mood;
 btn.onclick = () => selectMood(mood);
 moodButtonsDiv.appendChild(btn);
 }
}

// Mood selection
function selectMood(mood) {
 const output = document.getElementById("mood-output");
 const data = moods[mood];

 output.innerHTML = `
 <p>You feel ${mood}</p>
 <img src="${data.img}" width="300px" />
 <p>Listen to songs for your mood: <a href="${data.spotify}" target="_blank">Spotify Playlist</a></p>
 `;

 switch (mood) {
 case "Happy":
 document.body.style.backgroundColor = "#fff7c0";
 break;
 case "Sad":
 document.body.style.backgroundColor = "#d0e0ff";
 break;
 case "Angry":
 document.body.style.backgroundColor = "#ffb3b3";
 break;
 case "Calm":
 document.body.style.backgroundColor = "#c0ffd8";
 break;
 default:
 document.body.style.backgroundColor = "#f0f0f0";
 }
}
