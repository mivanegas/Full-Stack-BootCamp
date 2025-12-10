const orderBeingPrepared = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-txt").innerText =
        "Order is being prepared 🍜";
      resolve();
    }, 2000);
  });

const orderPrepared = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-txt").innerText =
        "Order prepared 🎉";
      resolve();
    }, 10000);
  });

const orderHandedOver = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-txt").innerText =
        "Order handed over to the delivery person 📦";
      resolve();
    }, 5000);
  });

const orderOnTheWay = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-txt").innerText =
        "Order is on the way 🚴";
      resolve();
    }, 3000);
  });

const orderReachedDestintaion = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-txt").innerText =
        "Order reached it's destination 📍";
      resolve();
    }, 8000);
  });

const orderDelivered = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById("order-status-txt").innerText =
        "Order has been delivered 😋";
      resolve();
    }, 4000);
  });

const placeOrder = () => {
  document.getElementById("order-status-img").src = "./thumbsup.gif";
  document.getElementById("order-status-txt").innerText = "Order confirmed ✅";
  orderBeingPrepared()
    .then(() => orderPrepared())
    .then(() => orderHandedOver())
    .then(() => orderOnTheWay())
    .then(() => orderReachedDestintaion())
    .then(() => orderDelivered())
    .then(() => console.log("Order processing completed"))
    .catch(() => console.log("Something went wrong"));
};
