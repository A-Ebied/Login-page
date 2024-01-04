// all inputs
var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");

// Sign Up:
var signUpArray = [];
if (localStorage.getItem("users") == null) {
  signUpArray = [];
} else {
  signUpArray = JSON.parse(localStorage.getItem("users"));
}

//for check inputs is empty or not
function isEmpty() {
  if (
    signupName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    return false;
  } else {
    return true;
  }
}

// for check email is exist
function isEmailExist() {
  for (var i = 0; i < signUpArray.length; i++) {
    if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
      return false;
    }
  }
}

function signUp() {
  if (isEmpty() == false) {
    document.getElementById("exist").innerHTML =
      '<span class="text-danger">All inputs is required</span>';
    return false;
  }
  // to store all value as object
  var signUp = {
    name: signupName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };
  if (signUpArray.length == 0) {
    signUpArray.push(signUp);
    localStorage.setItem("users", JSON.stringify(signUpArray));
    document.getElementById("exist").innerHTML =
      '<span class="text-success">Success</span>';
    location.href = "./home.html";
    return true;
  }
  if (isEmailExist() == false) {
    document.getElementById("exist").innerHTML =
      '<span class="text-danger">email already exists</span>';
  } else {
    signUpArray.push(signUp);
    localStorage.setItem("users", JSON.stringify(signUpArray));
    document.getElementById("exist").innerHTML =
      '<span class="text-success">Success</span>';
    location.href = "./home.html";
  }
}

function isLoginEmpty() {
  if (signinPassword.value == "" || signinEmail.value == "") {
    return false;
  } else {
    return true;
  }
}

function login() {
  if (isLoginEmpty() == false) {
    document.getElementById("incorrect").innerHTML =
      '<span class="text-danger">All inputs is required</span>';
    return false;
  }
  var password = signinPassword.value;
  var email = signinEmail.value;
  for (var i = 0; i < signUpArray.length; i++) {
    if (
      signUpArray[i].email.toLowerCase() == email.toLowerCase() &&
      signUpArray[i].password.toLowerCase() == password.toLowerCase()
    ) {
      location.href = "./components/home.html";
    } else {
      document.getElementById("incorrect").innerHTML =
        '<span class="text-danger">incorrect email or password</span>';
    }
  }
}

// for logout
function logout() {
  location.href = "../index.html";
}
