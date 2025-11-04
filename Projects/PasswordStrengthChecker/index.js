/*
    # Rules:
        1. Minimum length should be 8 characters
        2. At least one lower case character
        3. At least one uppercase character
        4. At least one special character ($, @, #, !)
        5. At least one number
        6. No easy passwords

        - Additional rules: 
            - Should not contain name (need to do)
            - Should not contain email (need to do)
          
    # Category
        - Strong
        - Medium
        - Weak

*/

// Ability to show password with eye icon
let eyeicon = document.getElementById("search-img");
let password = document.getElementById("search-password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "./Assets/eye-icons/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "./Assets/eye-icons/eye-close.png";
  }
};

function validatePassword(password) {
  // Check: if password is empty or null
  if (!password) {
    document.getElementById("invalid-pwd-alert").style.display = "block";
    return;
  }

  let score = 0;

  // Check: 1. At least 8 characters
  if (password.length >= 8) {
    document.getElementById("length-check").innerText = "✅";
    document
      .getElementById("length-check-container")
      .classList.add("list-group-item-success");
    score++;
  } else {
    document.getElementById("length-check").innerText = "⚠️";
    document
      .getElementById("length-check-container")
      .classList.add("list-group-item-danger");
  }

  // Check:At least 1 lowercase, one uppercase, 1 number
  let hasLowercaseChar = false;
  let hasUppercaseChar = false;
  let hasNumber = false;
  let hasSpecialChar = false;
  // a iterate through each character of the password string
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char >= "a" && char <= "z") {
      hasLowercaseChar = true;
    }
    if (char >= "A" && char <= "Z") {
      hasUppercaseChar = true;
    }
    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
    if (char == "$" || char == "@" || char == "#" || char == "!") {
      hasSpecialChar = true;
    }
  }

  if (hasLowercaseChar) {
    document.getElementById("lowercase-check").innerText = "✅";
    document
      .getElementById("lowercase-check-container")
      .classList.add("list-group-item-success");
    score++;
  } else {
    document.getElementById("lowercase-check").innerText = "⚠️";
    document
      .getElementById("lowercase-check-container")
      .classList.add("list-group-item-danger");
  }

  if (hasUppercaseChar) {
    document.getElementById("uppercase-check").innerText = "✅";
    document
      .getElementById("uppercase-check-container")
      .classList.add("list-group-item-success");
    score++;
  } else {
    document.getElementById("uppercase-check").innerText = "⚠️";
    document
      .getElementById("uppercase-check-container")
      .classList.add("list-group-item-danger");
  }

  if (hasNumber) {
    document.getElementById("number-check").innerText = "✅";
    document
      .getElementById("number-check-container")
      .classList.add("list-group-item-success");
    score++;
  } else {
    document.getElementById("number-check").innerText = "⚠️";
    document
      .getElementById("number-check-container")
      .classList.add("list-group-item-danger");
  }

  if (hasSpecialChar) {
    document.getElementById("specialchar-check").innerText = "✅";
    document
      .getElementById("specialchar-check-container")
      .classList.add("list-group-item-success");
    score++;
  } else {
    document.getElementById("specialchar-check").innerText = "⚠️";
    document
      .getElementById("specialchar-check-container")
      .classList.add("list-group-item-danger");
  }

  const easyPwds = [
    "user123",
    "admin123",
    "password123",
    "test123",
    "1234",
    "Test123!",
  ];
  // Check no easy passwords
  if (!easyPwds.includes(password)) {
    document.getElementById("no-easy-pwd-check").innerText = "✅";
    document
      .getElementById("no-easy-pwd-container")
      .classList.add("list-group-item-success");
    score++;
  } else {
    document.getElementById("no-easy-pwd-check").innerText = "⚠️";
    document
      .getElementById("no-easy-pwd-container")
      .classList.add("list-group-item-danger");
  }

  if (score >= 6) {
    document.getElementById("strong-pwd").style.display = "block";
  } else if (score >= 4) {
    document.getElementById("fair-pwd").style.display = "block";
  } else {
    document.getElementById("weak-pwd").style.display = "block";
  }
}

//Connecting form to password validation function
document
  .getElementById("search-bar")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userpassword = document.getElementById("search-password").value;
    console.log("Password: ", userpassword);

    validatePassword(userpassword);
  });

// Initialize Lucide icons
lucide.createIcons();

/*
    # Additional resources:
        - https://www.w3schools.com/charsets/ref_html_ascii.asp


    # Additional code:
      // // Check: 5. At least one number
      // const digits = ["0", "1", "2", "3", "4", "5", "6", "8", "9"];
      // // a. Iterate through each character of the password string
      // let containsDigit = false;
      // for (let i = 0; i < password.length; i++) {
      //   // b. Check whether character is = any of the character in digits
      //   if (digits.includes(password[i]));
      //   {
      //     console.log("At least one number ✅");
      //     containsDigit = true;
      //     break;
      //   }
      // }
      // if (!containsDigit) {
      //   console.log("At least one number ⚠️");
      // }
*/
