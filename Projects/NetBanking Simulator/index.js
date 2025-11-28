/*
    # Requirements:
        - Account balance
        - Account statement (Transactions)
        - Transfer
            - Transfer In (Credit)
            - Transfer Out (Debit)

*/

//Making account number visible/invisible
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

// Adding transactions to Account Statement
const transactionList = document.getElementById("transction-list");

/*
 Replicate <a> and <div> using JS (below)
        <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">ACH Transction: Jeff</h5>
                <div class="fs-5 text-danger">- $10,858.00</div>
            </div>
            <p class="mb-1">Transfer Out</p>
            <div class="d-flex w-100 justify-content-between">
                <small>11/22/2025 11:34 AM</small>
                <small>Balance: $110,987.05</small>
            </div>
         </a>
*/

function addToTransaction() {
  const listGroupItem = document.createElement("a");
  listGroupItem.classList.add("list-group-item", "list-group-item-action");
  listGroupItem.href = "#";

  const topPart = document.createElement("div");
  topPart.classList.add("d-flex", "w-100", "justify-content-between");

  const h5 = document.createElement("h5");
  h5.classList.add("mb-1");
  h5.innerText = "Deposit Transfer";

  const amount = document.createElement("div");
  amount.classList.add("fs-5,", "text-danger");
  amount.innerText = "$12,000.00";

  topPart.append(h5, amount);

  listGroupItem.append(topPart);
  transactionList.append(listGroupItem);
}
