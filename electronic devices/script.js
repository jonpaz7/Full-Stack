fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
      navbarContainer.innerHTML = data;
    }
  })
  .catch((error) => console.error("Error loading navbar:", error));

function addtocart() {
  document.getElementById("message").textContent = "Added to cart";
}

function showPicture1() {
  const thumbs = document.querySelectorAll(".smallImage");
  const mainImg = document.getElementById("mainImage");
  if (thumbs[0] && mainImg) {
    mainImg.src = thumbs[0].src;
  }
}

function showPicture2() {
  const thumbs = document.querySelectorAll(".smallImage");
  const mainImg = document.getElementById("mainImage");
  if (thumbs[1] && mainImg) {
    mainImg.src = thumbs[1].src;
  }
}

function showPicture3() {
  const thumbs = document.querySelectorAll(".smallImage");
  const mainImg = document.getElementById("mainImage");
  if (thumbs[2] && mainImg) {
    mainImg.src = thumbs[2].src;
  }
}

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

  //Updating cart counter
  cartCounter += 1;
  document.getElementById("cartCounter").textContent =
    "Number of products in cart: " + cartCounter;

  //Updating cart sum
  sum += p.price;
  document.getElementById("sum").textContent = `Sum: ${sum.toFixed(2)}$`;

  //Updating reaction
  if (sum > 300) {
    reaction = "Expensive";
  } else if (sum > 1000) {
    reaction = "Very Expensive";
  } else {
    reaction = "Cheap";
  }

  document.getElementById("priceReaction").textContent = reaction;

  //Updating products list
  productsList += `${p.name} <br>`;
  document.getElementById("productsList").innerHTML = productsList;
}

function resetCartCounter() {
  cartCounter = 0;
  sum = 0;
  document.getElementById("cartCounter").textContent =
    "Number of products in cart: " + cartCounter;
  document.getElementById("sum").textContent = "Sum: " + sum + "$";
  document.getElementById("priceReaction").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.createElement("footer");
  footer.className = "ai-credit-footer";
  footer.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
        </svg>
        <span>"Hand-coded by Eliav • Finishes enhanced by AI"</span>
    `;
  document.body.appendChild(footer);
});

function resetProductsCart() {
  document.getElementById("productsList").textContent = productsList = "";
}
