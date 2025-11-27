/*
    # Requirements:
        - Account balance
        - Account statement (Transactions)
        - Transfer
            - Transfer In (Credit)
            - Transfer Out (Debit)

*/

const accountNumber = "102230379866";
const eyeBtn = document.getElementById("see-account-number");
const accountDigits = document.getElementById("account-digits");
let accountNumberVisible = false;
eyeBtn.addEventListener("click", () => {
  eyeBtn.classList.toggle("fa-eye");
  eyeBtn.classList.toggle("fa-eye-slash");
  accountNumberVisible = !accountNumberVisible;

  if (accountNumberVisible) {
    accountDigits.innerText = accountNumber;
  } else {
    accountNoText.innerText = `*********${accountNumber.slice(-3)}`;
  }
});
