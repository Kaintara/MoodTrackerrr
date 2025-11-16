import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

const auth = getAuth();

const signupErrorEl = document.getElementById("signup-error");
const loginErrorEl = document.getElementById("login-error");
const signupBtn = document.getElementById("signup-btn");
const loginBtn = document.getElementById("login-btn");
const logoutBtn = document.getElementById("logout-btn");

// Handle Sign Up
if (signupBtn) {
  signupBtn.onclick = async (e) => {
    e.preventDefault();
    const email = document.getElementById("new-username").value;
    const password = document.getElementById("new-password").value;
    if (!email || !password) {
      signupErrorEl.innerText = "Please enter email and password";
      return;
    }
    try {
      signupErrorEl.innerText = "Creating account...";
      await createUserWithEmailAndPassword(auth, email, password);
      signupErrorEl.innerText = "Account created! You can now log in.";
      document.getElementById("new-username").value = "";
      document.getElementById("new-password").value = "";
      setTimeout(() => {
        document.getElementById("signup").style.display = "none";
        document.getElementById("login").style.display = "block";
        document.getElementById("login-button").style.display = "none";
        document.getElementById("signup-button").style.display = "none";
        signupErrorEl.innerText = "";
      }, 1500);
    } catch (error) {
      signupErrorEl.innerText = `Signup failed: ${error.message}`;
      console.error("Signup error:", error);
    }
  };
}

// Handle Login
if (loginBtn) {
  loginBtn.onclick = async (e) => {
    e.preventDefault();
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
      loginErrorEl.innerText = "Please enter email and password";
      return;
    }
    try {
      loginErrorEl.innerText = "Logging in...";
      await signInWithEmailAndPassword(auth, email, password);
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      loginErrorEl.innerText = "";
      const loginScreen = document.querySelector(".title-block");
      const appScreen = document.getElementById("app-screen");
      const collage = document.querySelector(".collage");
      if (loginScreen) loginScreen.style.display = "none";
      if (collage) collage.style.display = "none";
      if (appScreen) appScreen.style.display = "block";
      if (typeof initializeMoodApp === "function") initializeMoodApp();
    } catch (error) {
      loginErrorEl.innerText = `Login failed: ${error.message}`;
      console.error("Login error:", error);
    }
  };
}

// Handle Logout
if (logoutBtn) {
  logoutBtn.onclick = async () => {
    try {
      await signOut(auth);
      document.getElementById("mood-output").innerHTML = "";
      document.body.style.backgroundColor = "white";
      const loginScreen = document.querySelector(".title-block");
      const appScreen = document.getElementById("app-screen");
      const collage = document.querySelector(".collage");
      const loginButton = document.getElementById("login-button");
      const signupButton = document.getElementById("signup-button");
      if (appScreen) appScreen.style.display = "none";
      if (loginScreen) loginScreen.style.display = "block";
      if (collage) collage.style.display = "block";
      if (loginButton) loginButton.style.display = "block";
      if (signupButton) signupButton.style.display = "block";
      document.getElementById("login").style.display = "none";
      document.getElementById("signup").style.display = "none";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
}

// Monitor auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("User logged out");
  }
});
