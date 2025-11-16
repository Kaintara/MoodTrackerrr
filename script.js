// Screens
const loginScreen = document.getElementById("login-screen");
const moodScreen = document.getElementById("mood-screen");
const resultScreen = document.getElementById("result-screen");

// Elements
const nameSpan = document.getElementById("name");
const loginBtn = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const moodInput = document.getElementById("mood-input");
const moodSubmit = document.getElementById("mood-submit");
const moodTitle = document.getElementById("mood-title");
const spotify = document.getElementById("spotify");
const backBtn = document.getElementById("back-btn");
const moodCalendarDiv = document.getElementById("mood-calendar");
const journalInput = document.getElementById("journal");
const saveJournalBtn = document.getElementById("save-journal");

// Mood presets (add more moods here if you want)
const moods = {
happy: { color: "#FFF8A6", playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC" },
sad: { color: "#A5C8FF", playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1" },
angry: { color: "#FF7B7B", playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3YSRoSdA634" },
calm: { color: "#C5F9D7", playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO" }
};
const defaultMood = { color: "#DCDCDC", playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DWWEJlAGA9gs0" };

// LOGIN
loginBtn.addEventListener("click", () => {
const name = usernameInput.value.trim();
if (!name) return alert("Enter your name");
nameSpan.textContent = name;
loginScreen.style.display = "none";
moodScreen.style.display = "block";
});

// MOOD SUBMIT
moodSubmit.addEventListener("click", () => {
handleMood(moodInput.value);
});

// Handle mood input
function handleMood(inputMood) {
const moodKey = inputMood.toLowerCase().trim();
const moodData = moods[moodKey] || defaultMood;

moodScreen.style.display = "none";
resultScreen.style.display = "block";

moodTitle.textContent = `You are feeling ${inputMood}`;
document.body.style.backgroundColor = moodData.color;
spotify.src = moodData.playlist;

saveMood(inputMood);
showMoodCalendar();
loadJournal();
}

// BACK BUTTON
backBtn.addEventListener("click", () => {
resultScreen.style.display = "none";
moodScreen.style.display = "block";
});

// MOOD CALENDAR FUNCTIONS
function saveMood(mood) {
const today = new Date().toISOString().split("T")[0];
const log = JSON.parse(localStorage.getItem("moodLog") || "{}");
log[today] = mood;
localStorage.setItem("moodLog", JSON.stringify(log));
}

function showMoodCalendar() {
const log = JSON.parse(localStorage.getItem("moodLog") || "{}");
let html = "<ul>";
for (const date in log) {
html += `<li>${date}: ${log[date]}</li>`;
}
html += "</ul>";
moodCalendarDiv.innerHTML = html;
}

// JOURNAL FUNCTIONS
saveJournalBtn.addEventListener("click", () => {
const entry = journalInput.value.trim();
if (!entry) return alert("Write something first!");
const today = new Date().toISOString().split("T")[0];
const journalLog = JSON.parse(localStorage.getItem("journalLog") || "{}");
journalLog[today] = entry;
localStorage.setItem("journalLog", JSON.stringify(journalLog));
alert("Journal saved!");
});

function loadJournal() {
const today = new Date().toISOString().split("T")[0];
const journalLog = JSON.parse(localStorage.getItem("journalLog") || "{}");
journalInput.value = journalLog[today] || "";
}
