// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "Cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array

  for (let i = 0; i < products.length; i++) {
    if (id == products[i].id) {
      cartList.push(products[i]);
    }
  }
  console.log("cartList= ", cartList);

  document.getElementById("count_product").innerHTML = cartList.length - 1;
}

// Exercise 2
function cleanCart() {
  cartList.length = 0;
  console.log("cartList = ", cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  total = total;
  console.log(total);
}

// Exercise 4
function generateCart(cartList) {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  for (let i = 0; i < cartList.length; i++) {
    console.log("cart.length = ", cart.length);
    console.log("i= ", i);
    let found = false;
    let j = 0;
    for (j = 0; j < cart.length; j++) {
      console.log("He entrat al bucle j");
      console.log("cart.length = ", cart.length);
      console.log("j= ", j);

      if (cartList[i].id == cart[j].id) {
        cart[j].quantity++;
        found = true;
      }
    }

    if (!found) {
      cart[j] = cartList[i]; // Per què cartList també incorpora la propietat quantity????
      cart[j].quantity = 1;
      console.log("cart = ", cart);
    }
  }
  return cart;
}

// Exercise 5
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name == "Cooking oil" && cart[i].quantity >= 3) {
      cart[i].price = 10;
      cart[i].subtotalWithDiscount = Number(
        cart[i].price * cart[i].quantity
      ).toFixed(2);
    }

    if (cart[i].name == "Instant cupcake mixture" && cart[i].quantity >= 10) {
      cart[i].price = 3.33;
      console.log(cart[i].price);
      cart[i].subtotalWithDiscount = Number(
        cart[i].price * cart[i].quantity
      ).toFixed(2);
    }
    cart[i].subtotalWithDiscount = Number(
      cart[i].price * cart[i].quantity
    ).toFixed(2);
    total += Number(cart[i].subtotalWithDiscount);
  }
  return cart;
}

// Exercise 6
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  generateCart(cartList);
  applyPromotionsCart(cart);
  let cardItemContainer = document.getElementById("cart_list");
  let totalContainer = document.getElementById("total_price");

  for (let i = 0; i < cart.length; i++) {
    cardItemContainer.innerHTML += `
            <tr>
                <th scope="row">${cart[i].name}</th>
                <td>$${cart[i].price}</td>
                <td>${cart[i].quantity}</td>
                <td>$${cart[i].subtotalWithDiscount}</td>
            </tr>`;
  }
  totalContainer.innerHTML = Number(total); //Si aplico la funció calculateTotal m'agafa el array cartList que resulta ser una còpia de cart (item + quantity) i dóna error.
}

// ** Nivell II **

// Exercise 8
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
  for (let i = 0; i < products.length; i++) {
    if (id == products[i].id) {
      cartList.push(products[i]);
    }
  }
  console.log("cartList= ", cartList);
  for (let i = 0; i < cartList.length; i++) {
    console.log("cart.length = ", cart.length);
    console.log("i= ", i);
    let found = false;
    let j = 0;
    for (j = 0; j < cart.length; j++) {
      if (cartList[i].id == cart[j].id) {
        cart[j].quantity++;
        found = true;
      }
    }

    if (!found) {
      cart[j] = cartList[i]; // Per què cartList també incorpora la propietat quantity????
      cart[j].quantity = 1;
      console.log("cart = ", cart);
    }
  }
  return cart;
}

// Exercise 9
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for (let i = 0; i < cart.length; i++) {
    if (id == cart[i].id) {
      if (cart[i].quantity == 1) {
        cart.splice(i, 1);
      } else {
        cart[i].quantity--;
      }
    }
  }
  return cart;
}

function open_modal() {
  console.log("Open Modal");
  printCart();
}
