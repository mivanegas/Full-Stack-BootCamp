// Updating Prices
document.querySelectorAll(".menu-item").forEach((select) => {
  select.addEventListener("change", function () {
    const selectedMenuOption = this.options[this.selectedIndex];
    const price = selectedMenuOption.getAttribute("data-price");
    const priceField = this.getAttribute("data-price-field");
    document.getElementById(priceField).value = price;
  });
});

const orderBeingPrepared = (orderNo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(`order-status-img-${orderNo}`).src =
        "./assets/frying-pan.gif";
      document.getElementById(`order-status-txt-${orderNo}`).innerText =
        "Order is being prepared";
      resolve(orderNo);
    }, 2000);
  });

const orderPrepared = (orderNo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(`order-status-img-${orderNo}`).src =
        "./assets/platter.gif";
      document.getElementById(`order-status-txt-${orderNo}`).innerText =
        "Order prepared";
      resolve(orderNo);
    }, 10000);
  });

const orderHandedOver = (orderNo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(`order-status-img-${orderNo}`).src =
        "./assets/food-pickup.gif";
      document.getElementById(`order-status-txt-${orderNo}`).innerText =
        "Order handed over to the delivery person";
      resolve(orderNo);
    }, 5000);
  });

const orderOnTheWay = (orderNo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(`order-status-img-${orderNo}`).src =
        "./assets/food-delivery.gif";
      document.getElementById(`order-status-txt-${orderNo}`).innerText =
        "Order is on the way";
      resolve(orderNo);
    }, 3000);
  });

const orderReachedDestintaion = (orderNo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(`order-status-img-${orderNo}`).src =
        "./assets/courier.gif";
      document.getElementById(`order-status-txt-${orderNo}`).innerText =
        "Order reached it's destination";
      resolve(orderNo);
    }, 8000);
  });

const orderDelivered = (orderNo) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById(`order-status-img-${orderNo}`).src =
        "./assets/delivery-completed.gif";
      document.getElementById(`order-status-txt-${orderNo}`).innerText =
        "Order has been delivered";
      resolve(orderNo);
    }, 4000);
  });

let orderNo = 0;

const placeOrder = () => {
  orderNo++;
  createOrderCard();

  document.getElementById(`order-status-img-${orderNo}`).src =
    "./assets/thumbsup.gif";
  document.getElementById(`order-status-txt-${orderNo}`).innerText =
    "Order confirmed";

  orderBeingPrepared(orderNo)
    .then((orderNo) => orderPrepared(orderNo))
    .then((orderNo) => orderHandedOver(orderNo))
    .then((orderNo) => orderOnTheWay(orderNo))
    .then((orderNo) => orderReachedDestintaion(orderNo))
    .then((orderNo) => orderDelivered(orderNo))
    .then((orderNo) => console.log(`Order ${orderNo} completed processing`))
    .catch(() => console.log("Something went wrong"));
};

function createOrderCard() {
  const orderList = document.getElementById("order-list");

  const colDiv = document.createElement("div");
  colDiv.classList.add("col-lx-4", "col-md-6");
  colDiv.id = `order-${orderNo}`;

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "text-center", "mt-2", "mb-2");

  const cardHeaderDiv = document.createElement("div");
  cardHeaderDiv.classList.add("card-header");
  cardHeaderDiv.innerText = `Order No. ${orderNo}`;

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");

  const item1 = document.getElementById("item-1").value;
  const quantity1 = document.getElementById("quantity-1").value;
  const price1 = document.getElementById("price-1").value;
  const item2 = document.getElementById("item-2").value;
  const quantity2 = document.getElementById("quantity-2").value;
  const price2 = document.getElementById("price-2").value;
  const item3 = document.getElementById("item-3").value;
  const quantity3 = document.getElementById("quantity-3").value;
  const price3 = document.getElementById("price-3").value;

  const total =
    Number(price1) * Number(quantity1) +
    Number(price2) * Number(quantity2) +
    Number(price3) * Number(quantity3);

  const orderForm = document.getElementById("order-form");
  orderForm.reset();
  document.getElementById("price-1").value = "0";
  document.getElementById("price-2").value = "0";
  document.getElementById("price-3").value = "0";

  cardBodyDiv.innerHTML = ` 
    <table class="table table-striped">
       <thead>
          <tr>
             <th scope="col">#</th>
             <th scope="col">Item</th>
             <th scope="col">Quantity</th>
             <th scope="col">Price</th>
            </tr>
        </thead>
         <tbody>
            <tr>
              <th scope="row">1</th>
                <td>${item1}</td>
                <td>${quantity1}</td>
                <td>$${Number(price1).toFixed(2)}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
                <td>${item2}</td>
                <td>${quantity2}</td>
                <td>$${Number(price2).toFixed(2)}</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>${item3}</td>
                <td>${quantity3}</td>
                <td>$${Number(price3).toFixed(2)}</td>
              </tr>
              <tr>
                 <th scope="row">Total</th>
                  <td></td>
                  <td></td>
                  <td>$${Number(total).toFixed(2)}</td>
               </tr>
          </tbody>
      </table>
      `;

  const orderStatusImg = document.createElement("img");
  orderStatusImg.src = "";
  orderStatusImg.id = `order-status-img-${orderNo}`;
  orderStatusImg.width = "75";

  const orderStatusTxt = document.createElement("p");
  orderStatusTxt.classList.add("card-text");
  orderStatusTxt.id = `order-status-txt-${orderNo}`;

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("btn", "btn-danger", "btn-sm");
  cancelBtn.innerText = "Cancel";
  // To cancel order
  cancelBtn.addEventListener("click", () => {
    const cancelOrderBtn = document.getElementById(`order-${orderNo}`);
    orderList.remove(cancelOrderBtn);
  });

  cardBodyDiv.append(orderStatusImg, orderStatusTxt, cancelBtn);

  const cardFooterDiv = document.createElement("div");
  cardFooterDiv.classList.add("card-footer", "text-secondary");
  const currentTime = new Date();
  cardFooterDiv.innerText = currentTime.toLocaleString();

  cardDiv.append(cardHeaderDiv, cardBodyDiv, cardFooterDiv);
  colDiv.append(cardDiv);
  orderList.append(colDiv);
}
