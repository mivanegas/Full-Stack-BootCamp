import login from "./users.js";
// Default Import
// import getFilteredProducts from "./product.js";

//Named Import
import {
  getAllProducts as getAllP,
  getFilteredProducts as getFilteredP,
  getProductDetails as getPDetails,
} from "./product.js";

import cartAbc from "./cart.js";
import orderAbc from "./order.js";

import test from "./feature/abc.js";

login();

// regular way same function names
// getAllProducts();
// getFilteredProducts();
// getProductDetails();

// Alternative way with renamed functions
getAllP();
getFilteredP();
getPDetails();

cartAbc();
orderAbc();

test();
