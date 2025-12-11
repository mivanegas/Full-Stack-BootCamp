const orderBeingPrepared = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-img").src =
        "./assets/frying-pan.gif";
      document.getElementById("order-status-txt").innerText =
        "Order is being prepared";
      resolve();
    }, 2000);
  });

const orderPrepared = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-img").src = "./assets/platter.gif";
      document.getElementById("order-status-txt").innerText = "Order prepared";
      resolve();
    }, 10000);
  });

const orderHandedOver = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-img").src =
        "./assets/food-pickup.gif";
      document.getElementById("order-status-txt").innerText =
        "Order handed over to the delivery person";
      resolve();
    }, 5000);
  });

const orderOnTheWay = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-img").src =
        "./assets/food-delivery.gif";
      document.getElementById("order-status-txt").innerText =
        "Order is on the way";
      resolve();
    }, 3000);
  });

const orderReachedDestintaion = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-img").src = "./assets/courier.gif";
      document.getElementById("order-status-txt").innerText =
        "Order reached it's destination";
      resolve();
    }, 8000);
  });

const orderDelivered = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-img").src =
        "./assets/delivery-completed.gif";
      document.getElementById("order-status-txt").innerText =
        "Order has been delivered";
      resolve();
    }, 4000);
  });

const placeOrder = () => {
  createOrderCard();

  document.getElementById("order-status-img").src = "./assets/thumbsup.gif";
  document.getElementById("order-status-txt").innerText = "Order confirmed";

  orderBeingPrepared()
    .then(() => orderPrepared())
    .then(() => orderHandedOver())
    .then(() => orderOnTheWay())
    .then(() => orderReachedDestintaion())
    .then(() => orderDelivered())
    .then(() => console.log("Order processing completed"))
    .catch(() => console.log("Something went wrong"));
};

function createOrderCard() {
  const orderList = document.getElementById("order-list");

  const col = document.createElement("div");
  col.classList.add("col-lx-4", "col-lg-6");

  orderList.append(col);
}

/*
  <div class="col-lg-4 col-md-6">
    <!-- Card -->
    <div class="card text-center mt-2">
      <div class="card-header">Order No.1</div>
        <div class="card-body">
          <!-- Table -->
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
                    <td>Burrito</td>
                    <td>4</td>
                    <td>$3.99</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Tacos</td>
                    <td>6</td>
                    <td>$2.99</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Horchata</td>
                    <td>3</td>
                    <td>$1.99</td>
                  </tr>
                  <tr>
                    <th scope="row">Total</th>
                    <td></td>
                    <td></td>
                    <td>$39.87</td>
                  </tr>
                </tbody>
              </table>
              <img src="" id="order-status-img" width="75" />
              <p class="card-text" id="order-status-txt"></p>
              <a href="#" class="btn btn-danger btn-sm">Cancel</a>
            </div>
            <div class="card-footer text-muted">2 days ago</div>
          </div>
        </div>
        */
