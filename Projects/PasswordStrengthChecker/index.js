/*
    # Rules:
        1. Minimum length should be 8 characters
        2. At least one lower case character
        3. At least one uppercase character
        4. At least one special character ($, @, #)

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
  // Check: Password isn't empty or null
  if (!password) {
    console.log("Invalid Password! Please enter a valid password");
    return;
  }

  // Check: 1. At least 8 characters
  if (password.length >= 8) {
    document.getElementById("length-check").innerText = "✅";
  } else {
    document.getElementById("length-check").innerText = "⚠️";
  }

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
  }

  if (hasLowercaseChar) {
    console.log("At least one lowercase character ✅");
  } else {
    console.log("At least one lowercase character  ⚠️");
  }
}
// Check: 5 At least one number
const digits = ["0", "1", "2", "3", "4", "5", "6", "8", "9"];
// a. Iterate through each character of the password string
for (let i = 0; i < password.length; i++) {
  // b. Check whether the character is = any of the character in digits
  if (digits.includes(password[i]));
  {
    console.log("At least one number ✅");
    containsDigit = true;
    break;
  }
}
if (!containsDigit) {
  console.log("At least one number ⚠️");
}

// Check: 2. At least one lowercase character

// Check: 2. At least one lowercase character

const password = prompt("Enter your password");
console.log(password);

validatePassword(password);

/*
    # Additional resources:
        - https://www.w3schools.com/charsets/ref_html_ascii.asp
*/
