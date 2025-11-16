// Login elements
const title = document.querySelector(".title-block");
const appScreen = document.getElementById("app-screen");
const loginButton = document.getElementById("login-button");
const logoutBtn = document.getElementById("logout-btn");
const loginError = document.getElementById("login-error");
const loginDiv = document.getElementById("login");
const signupDiv = document.getElementById("signup");
const collage = document.querySelector(".collage");


// Login/Signup button handlers for UI display
if (loginButton) {
    loginButton.onclick = () => {
        appScreen.style.display = "block";
        title.style.display = "none";
        loginButton.style.display = "none";
    };
}

const moods = {
 Happy: {
 spotify: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"
 },
 Sad: {
 spotify: "https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1"
 },
 Angry: {
 spotify: "https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634"
 },
 Calm: {
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