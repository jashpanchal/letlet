function back(){
    localStorage.removeItem("Username");
    //localStorage.removeItem("inputaddroom");
    window.location = "login.html";
}
username=localStorage.getItem("Username");
document.getElementById("usrnme").innerHTML = username;
const firebaseConfig = {
    apiKey: "AIzaSyASP3H3MMhoMa0y_J8g-mCU3EDm9kQ-zsg",
    authDomain: "bleh-let.firebaseapp.com",
    databaseURL: "https://bleh-let-default-rtdb.firebaseio.com/",
    projectId: "bleh-let",
    storageBucket: "bleh-let.appspot.com",
    messagingSenderId: "697182257639",
    appId: "1:697182257639:web:4fa382934039fb4b043d42",
    measurementId: "G-X5TS25HZC0"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);