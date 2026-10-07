let cartCounter = 0;
let sum = 0.0;
let cart = [];

const PRODUCTS = [
  { id: 0, name: "Smartphone S26", price: 699.99 },
  { id: 1, name: "Tablet T15", price: 399.99 },
  { id: 2, name: "iPhone 14", price: 499.99 },
  { id: 3, name: "Toaster", price: 99.99 },
  { id: 4, name: "TV", price: 1599.99 },
  { id: 5, name: "Mouse and Keyboard", price: 199.99 },
];

function addProduct(productID) {
  const p = PRODUCTS.find((x) => x.id === productID);

  if (!p) return;

  let found = false;
  let foundIndex;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].id == p.id) {
      found = true;
      foundIndex = i;
    }
  }

  if (!found) {
    cart.push({ ...p, quantity: 1 });
  } else {
    cart[foundIndex].quantity++;
  }

  cartCounter++;
  sum += p.price;

  render();
}

function deleteProduct(productID, getrid) {
  const p = PRODUCTS.find((x) => x.id === productID);

  if (!p) return;

  let found = false;
  let foundIndex;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].id == p.id) {
      found = true;
      foundIndex = i;
    }
  }

  if (getrid) {
    cartCounter -= cart[foundIndex].quantity;
    sum -= cart[foundIndex].quantity * cart[foundIndex].price;
    cart.splice(foundIndex, 1);
    render();
    return;
  }

  if (found) {
    if (cart[foundIndex].quantity > 1) {
      cart[foundIndex].quantity--;
    } else if (cart[foundIndex].quantity == 1) {
      cart.splice(foundIndex, 1);
    }
  }

  cartCounter = Math.max(cartCounter - 1, 0);
  sum = Math.max(sum - p.price, 0);

  render();
}

function render() {
  let text = "";

  for (let i = 0; i < cart.length; i++) {
    text += `#  ${i + 1} ${cart[i].name} <strong>${cart[i].price}</strong> <strong>Quantity: ${cart[i].quantity}</strong> <button class="delBTNS" onclick="deleteProduct(${cart[i].id} , true)">X</button> <br>`;
  }

  //Updating reaction
  if (sum == 0) {
  } else if (sum > 3000) {
    reaction = "Very  Expensive";
  } else if (sum > 1000) {
    reaction = "Expensive";
  } else {
    reaction = "Cheap";
  }

  document.getElementById("productsList").innerHTML = text;

  document.getElementById("cartCounter").textContent =
    "Number of products in cart: " + cartCounter;

  document.getElementById("sum").textContent = `Sum: ${sum.toFixed(2)}$`;

  document.getElementById("priceReaction").textContent = reaction;
}

function resetCartCounter() {
  cartCounter = 0;
  sum = 0;
  document.getElementById("cartCounter").textContent =
    "Number of products in cart: " + cartCounter;
  document.getElementById("sum").textContent = "Sum: " + sum + "$";
  document.getElementById("priceReaction").textContent = "";

  if (cart.length != 0) {
    document.getElementById("productsList").textContent = cart = [];
  } else {
    window.alert("The cart is already empty");
  }
}
