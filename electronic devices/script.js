const PRODUCTS = [
  { id: 0, name: "Smartphone S26", price: 699.99 },
  { id: 1, name: "Tablet T15", price: 399.99 },
  { id: 2, name: "iPhone 14", price: 499.99 },
  { id: 3, name: "Toaster", price: 99.99 },
  { id: 4, name: "TV", price: 1599.99 },
  { id: 5, name: "Mouse and Keyboard", price: 199.99 },
];

let cartCounter = 0;
let sum = 0.0;
let productsList = [];

function addProduct(productID) {
  const p = PRODUCTS.find((x) => x.id === productID);

  if (!p) return;

  //Updating cart counter
  cartCounter++;

  //Updating cart sum
  sum += p.price;

  //Updating products list
  productsList.push(p.name);
  render();
}

function deleteProduct(productID) {
  const p = PRODUCTS.find((x) => x.id === productID);

  if (!p) return;

  cartCounter = Math.max(cartCounter - 1, 0);

  sum = Math.max(sum - p.price, 0);

  let productToDelIndex = productsList.lastIndexOf(p.name);

  if (productToDelIndex != -1) {
    productsList.splice(productToDelIndex, 1);
  }
  render();
}

function render() {
  let text = "";

  for (let i = 0; i < productsList.length; i++) {
    let itemORG = PRODUCTS.find((x) => x.name === productsList[i]);
    text += `#  ${i + 1} ${productsList[i]} <strong>${itemORG.price}</strong> <button class="delBTNS" onclick="deleteProduct(${itemORG.id})">X</button> <br>`;
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
  document.getElementById("productsList").textContent = productsList = [];
}
