let askForVegetable = "Please enter a vegetable";

let vegName = "";
let price = 0;
let quantity = 0;

let VEGETABLES = [
  { id: 1, vegName: "Carrot", price: 3 },
  { id: 2, vegName: "Broccoli", price: 5 },
  { id: 3, vegName: "Potato", price: 7 },
];

function show(vegID) {
  const v = VEGETABLES.find((x) => x.id == vegID);

  if (v) {
    vegName = v.vegName;
    price = v.price;
    quantity = Number(document.getElementById("quantity").value);
  }

  //Taking care of veg name input
  if (vegName == null || vegName == "") {
    document.getElementById("vegetableInfo").textContent = askForVegetable;
  } else {
    document.getElementById("vegetableInfo").textContent = vegName;
  }

  //Taking care of price input
  if (price <= 0) {
    document.getElementById("priceInfo").textContent = "Invalid Price";
  } else if (price > 10) {
    document.getElementById("priceInfo").textContent = "Expensive";
  } else {
    document.getElementById("priceInfo").textContent = "Cheap";
  }

  //Taking care of quantity input
  if (quantity <= 0) {
    document.getElementById("quantityInfo").textContent = "Invalid Quantity";
  } else {
    document.getElementById("quantityInfo").textContent = quantity;
  }

  if (price > 10 && quantity > 5) {
    document.getElementById("specialOrder").textContent = "Special Order";
  }

  if (vegName != "" && price != "" && quantity != "") {
    let summaryInfo = `
        ========= Summary ========== \n
        Vegetable Name: ${vegName} \n
        Price: ${price} \n
        Quantity: ${quantity} \n
        `;

    document.getElementById("summary-info").textContent = summaryInfo;
  }
}

function clearAll() {
  document.getElementById("vegs").value = 1;
  document.getElementById("quantity").value = "";
  document.getElementById("vegetableInfo").textContent = "";
  document.getElementById("priceInfo").textContent = "";
  document.getElementById("quantityInfo").textContent = "";
  document.getElementById("specialOrder").textContent = "";
  document.getElementById("summary-info").textContent = "";
}
