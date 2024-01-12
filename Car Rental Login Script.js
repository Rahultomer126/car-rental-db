

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
    databaseURL: "https://carreg-aafe5.firebaseio.com",
    projectId: "carreg-aafe5",
    storageBucket: "carreg-aafe5.appspot.com",
    messagingSenderId: "405265220968",
    appId: "1:405265220968:web:b13446e6e70c43152842dd",
    measurementId: "G-3FSZ3ZRQNW"
};


    function togglePasswordVisibility() {
        var passwordInput = document.getElementById('passwordInput');
        var visibilityBtn = document.getElementById('visibilityBtn');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            visibilityBtn.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
        } else {
            passwordInput.type = 'password';
            visibilityBtn.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
        }
    }

    function login() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('passwordInput').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function(userCredential) {
                // Successfully signed in
                var user = userCredential.user;
                // Redirect to another page or perform other actions
                window.location.href = 'home.html';
            })
            .catch(function(error) {
                // Handle errors
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error(errorMessage);
                // You can display an error message to the user if needed
            });
    }