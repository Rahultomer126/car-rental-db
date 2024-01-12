

function visibility() {
    let passwordInput = document.getElementById("passwordInput");
    let eyeStyle= document.getElementById("visibilityBtn");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeStyle.style.color = "rgb(0, 162, 255)";
    } else {
        passwordInput.type ="password";
        eyeStyle.style.color = "rgb(116, 116, 116)";
    }
}

function redirectToLogin() {
  // Redirect to the Car Rental Login page
  window.location.href = 'Car Rental Login.html';
}


function showMessage() {
    document.getElementById('overlay').style.display = 'flex';
  }

  // JavaScript to hide the overlay and message box
  function hideMessage() {
    document.getElementById('overlay').style.display = 'none';
  }


  const firebaseConfig = {
    apiKey: "AIzaSyBxKGGkaouaEwau6LyBXLsyYmVPfAQ21mw",
    authDomain: "carreg-aafe5.firebaseapp.com",
    databaseURL: "https://carreg-aafe5-default-rtdb.firebaseio.com",
    projectId: "carreg-aafe5",
    storageBucket: "carreg-aafe5.appspot.com",
    messagingSenderId: "405265220968",
    appId: "1:405265220968:web:b13446e6e70c43152842dd",
    measurementId: "G-3FSZ3ZRQNW"
};

// Initialize database
firebase.initializeApp(firebaseConfig);

// Reference database
var register_pageDB = firebase.database().ref("car-reg");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('car-reg').addEventListener("submit", submitform);
});

function submitform(e) {
    e.preventDefault();

    var name = getElementByIdVal('name');
    var email = getElementByIdVal('email');
    var paswd = getElementByIdVal('passwordInput'); // Update the ID to match your HTML

    saveMessages(name, email, paswd);

    // Enable alert
    document.querySelector('.alert').style.display = "block";

    // Remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById('car-reg').reset();
}

const saveMessages = (name, email, paswd) => {
    var newRegForm = register_pageDB.push();

    newRegForm.set({
        name: name,
        email: email,
        paswd: paswd,
    });
};

const getElementByIdVal = (id) => {
    var element = document.getElementById(id);
    return element ? element.value : null;
};
