/*
    # Rules:
        1. Minimum length should be 8 characters
        2. At least one lower case character
        3. At least one uppercase character
        4. At least one special character ($, @, #, !)
        5. At least one number

        - Additional rules: 
            - Should not contain name
            - Should not contain email
            - Should not be any of these simple passwords (user123, admin123, password123, test123 etc.)

    # Category
        - Strong
        - Medium
        - Weak

*/

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
    if (char > "0" && char <= "9") {
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

  if (score >= 5) {
    document.getElementById("strong-pwd").style.display = "block";
  } else if (score >= 3) {
    document.getElementById("fair-pwd").style.display = "block";
  } else {
    document.getElementById("weak-pwd").style.display = "block";
  }
}

const inputPassword = prompt("Enter your password");
console.log(inputPassword);

validatePassword(inputPassword);

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
