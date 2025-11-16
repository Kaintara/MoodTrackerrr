

// Login elements
const loginScreen = document.getElementById("login-screen");
const resultScreen = document.getElementById("result-screen");
const moodscreen = document.getElementById("mood-screen");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");
const loginError = document.getElementById("login-error");
const collage = document.getElementsByClassName('.collage');
const titleBlock = document.getElementsById('.title-block');
const nameSpan = document.getElementById("name");
const moodInput = document.getElementById("mood-input");
const moodSubmit = document.getElementById("mood-submit");

const moodTitle = document.getElementById("mood-title");
const moodBoard = document.getElementById("mood-board");
const spotify = document.getElementById("spotify");
const backBtn = document.getElementById("back-btn");

loginBtn.onclick = () => {
 const user = document.getElementById("username").value.trim();
 nameSpan.innerText = user || "User";
 loginScreen.style.display = "none";
 moodscreen.style.display = "block";
 collage.style.display = "none";
 loginError.innerText = "";
 titleBlock.style.display = "none";
}

logoutBtn.onclick = () => {
 appScreen.style.display = "none";
 loginScreen.style.display = "block";
  collage.style.display = "block";
  titleBlock.style.display = "block";
 document.getElementById("username").value = "";
 document.getElementById("password").value = "";
 document.getElementById("mood-output").innerHTML = "";
 document.body.style.backgroundColor = "white";
};

// Mood data: images + Spotify links
const moods = {
happy: {
color: "#FFF8A6",
images: ["happy.jpeg", "happy2.jpeg", "happy3.jpeg"],
playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC"
},
sad: {
color: "#A5C8FF",
images: ["sad.jpeg", "sad2.jpeg", "sad3.jpeg"],
playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1"
},
angry: {
color: "#FF7B7B",
images: ["anger.jepg", "anger2.jpeg"],
playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634"
},
calm: {
color: "#C5F9D7",
images: ["calm.jpeg", "calm2.jpeg", "calm3.jpeg"],
playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO"
},

// default fallback for ANY emotion typed
default: {
color: "#E3E3E3",
images: ["calm5.jpeg","calm6.jpeg","calm7.jpeg"],
playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DWYMroOc5KTTh" // general mood playlist
}
};

moodSubmit.addEventListener("click", () => {
const mood = moodInput.value.toLowerCase().trim();
showMood(mood);
});

function showMood(mood) {
    const moodScreen = document.getElementById("mood-screen");
    const resultScreen = document.getElementById("result-screen");
    moodScreen.style.display = "none";
    resultScreen.style.display = "block";

const moodInfo = moods[mood] || moods.default;

moodTitle.textContent = `You're feeling ${mood}`;
document.body.style.backgroundColor = moodInfo.color;

// ✨ MOOD BOARD (hide if no images)
if (moodInfo.images.length === 0) {
moodBoard.classList.add("hidden");
moodBoard.innerHTML = "";
} else {
moodBoard.classList.remove("hidden");
moodBoard.innerHTML = "";
moodInfo.images.forEach(img => {
const pic = document.createElement("img");
pic.src = img;
moodBoard.appendChild(pic);
});
}

// 🎵 Spotify
spotify.src = moodInfo.playlist;
}

backBtn.addEventListener("click", () => {
resultScreen.style.display = "none";
moodScreen.style.display = "block";
});

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
