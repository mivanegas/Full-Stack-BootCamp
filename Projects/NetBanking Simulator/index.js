//Making account number visible/invisible
const accountNumber = "102230379866";
const eyeBtn = document.getElementById("see-account-number");
const accountNoText = document.getElementById("account-no-text");
let accountNoVisible = false;
eyeBtn.addEventListener("click", () => {
  eyeBtn.classList.toggle("fa-eye");
  eyeBtn.classList.toggle("fa-eye-slash");
  accountNoVisible = !accountNoVisible;

  if (accountNoVisible) {
    accountNoText.innerText = accountNumber;
  } else {
    accountNoText.innerText = `*********${accountNumber.slice(-3)}`;
  }
});

let balance = 120000;
document.getElementById("account-balance").innerText = `$${balance.toFixed(2)}`;
// Adding transactions to Account Statement
const transactionList = document.getElementById("transaction-list");

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

function deposit() {
  // Collect form data and reset
  const amountIn = document.getElementById("amount-to-deposit");
  const amountToDeposit = Number(amountIn.value);
  amountIn.value = "";
  balance += amountToDeposit;
  document.getElementById("account-balance").innerText = `$${balance.toFixed(
    2
  )}`;

  //Creating element structure using DOM Methods
  const listGroupItem = document.createElement("a");
  listGroupItem.classList.add("list-group-item", "list-group-item-action");

  const topPart = document.createElement("div");
  topPart.classList.add("d-flex", "w-100", "justify-content-between");

  const h5 = document.createElement("h5");
  h5.classList.add("mb-1");
  h5.innerText = "Deposit";

  const amount = document.createElement("div");
  amount.classList.add("fs-5", "text-success");
  amount.innerText = `+ $${amountToDeposit.toFixed(2)}`;

  topPart.append(h5, amount);

  const middlePart = document.createElement("p");
  middlePart.classList.add("mb-1");
  middlePart.innerText = "Transfer in";

  const lastPart = document.createElement("div");
  lastPart.classList.add("d-flex", "w-100", "justify-content-between");

  const small1 = document.createElement("small");
  const currentDateTime = new Date();
  small1.innerText = currentDateTime.toLocaleString();
  const small2 = document.createElement("small");
  small2.innerText = `Updated Balance: $${balance.toFixed(2)}`;
  lastPart.append(small1, small2);

  // Makes latest transfer out go to the top
  listGroupItem.append(topPart, middlePart, lastPart);
  const existingList = transactionList.innerHTML;
  transactionList.innerHTML = "";
  transactionList.append(listGroupItem);
  transactionList.innerHTML += existingList;

  // Show alert
  document.getElementById("deposit-successful").innerHTML = `
            <div
                class="alert alert-success alert-dismissible fade show mt-2"
                role="alert"
              >
                Deposit successful.
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>`;
}

function sendMoney() {
  // Collect form data and reset
  const amountToTransfer = Number(
    document.getElementById("amount-to-transfer").value
  );
  const transferType = document.getElementById("transfer-type").value;
  const beneficiaryName = document.getElementById("beneficiary-name").value;
  const sendMoneyForm = document.getElementById("send-money-form");
  sendMoneyForm.reset();
  balance -= amountToTransfer;
  document.getElementById("account-balance").innerText = `$${balance.toFixed(
    2
  )}`;

  //Creating element structure using DOM Methods
  const listGroupItem = document.createElement("a");
  listGroupItem.classList.add("list-group-item", "list-group-item-action");

  const topPart = document.createElement("div");
  topPart.classList.add("d-flex", "w-100", "justify-content-between");

  const h5 = document.createElement("h5");
  h5.classList.add("mb-1");
  h5.innerText = `${transferType} Transfer: ${beneficiaryName}`;

  const amount = document.createElement("div");
  amount.classList.add("fs-5", "text-danger");
  amount.innerText = `- $${amountToTransfer.toFixed(2)}`;

  topPart.append(h5, amount);

  const middlePart = document.createElement("p");
  middlePart.classList.add("mb-1");
  middlePart.innerText = "Transfer out";

  const lastPart = document.createElement("div");
  lastPart.classList.add("d-flex", "w-100", "justify-content-between");

  const small1 = document.createElement("small");
  const currentDateTime = new Date();
  small1.innerText = currentDateTime.toLocaleString();
  const small2 = document.createElement("small");
  small2.innerText = `Updated Balance: $${balance.toFixed(2)}`;
  lastPart.append(small1, small2);

  // Makes latest transfer out go to the top
  listGroupItem.append(topPart, middlePart, lastPart);
  const existingList = transactionList.innerHTML;
  transactionList.innerHTML = "";
  transactionList.append(listGroupItem);
  transactionList.innerHTML += existingList;

  // Show alert
  document.getElementById("transfer-successful").innerHTML = `
    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert" >
      Transfer successful!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

/*
    # Requirements:
        - Account balance
        - Account statement (Transactions)
        - Transfer
            - Transfer In (Credit)
            - Transfer Out (Debit)

*/
