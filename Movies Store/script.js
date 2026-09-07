let askForMovie = "Please enter a movie name";

let movieName = "";
let price = 0;
let tickets = 0;
let orderType = "";
let ticketType = "";
let total = 0;
let age = 0;

let MOVIES = [
  { id: 0, movieName: "0", price: 0 },
  { id: 1, movieName: "The Hateful Eight", price: 300 },
  { id: 2, movieName: "Avatar", price: 50 },
  { id: 3, movieName: "Batman", price: 40 },
  { id: 4, movieName: "Titanic", price: 60 },
];

function show(movieID) {
  clearOutputs();

  const v = MOVIES.find((x) => x.id == movieID);

  if (v) {
    movieName = v.movieName;
    price = v.price;
    tickets = Number(document.getElementById("tickets").value);
    age = Number(document.getElementById("age").value);
  }

  //Taking care of movie name input
  if (movieName == null || movieName == "0") {
    document.getElementById("movieInfo").textContent = askForMovie;
  }

  //Taking care of quantity input
  if (tickets <= 0) {
    document.getElementById("quantityInfo").textContent = "Invalid Quantity";
  }

  if (age == null || age == "") {
    document.getElementById("ageInfo").textContent = "Insert age";
  }

  if (price > 200 && tickets > 4) {
    orderType = "Large group order";
  } else if (tickets > 4) {
    orderType = "Group order";
  } else {
    orderType = "Regular order";
  }

  if (age < 12) {
    ticketType = "Child ticket";
  } else {
    ticketType = "Regular ticket";
  }

  total = price * tickets;

  if (movieName != "" && price != "" && tickets != "" && age != "") {
    let summaryInfo = `
        ============= Summary ============= \n
        Movie Name: ${movieName} \n
        Ticket Price: ${price}₪ \n
        Tickets: ${tickets} \n
        Order type: ${orderType}\n
        Ticket type: ${ticketType}\n
        
        Total: ${total}₪
        `;

    document.getElementById("summary-info").textContent = summaryInfo;
  }
}

function clearOutputs() {
  document.getElementById("movieInfo").textContent = "";
  document.getElementById("priceInfo").textContent = "";
  document.getElementById("quantityInfo").textContent = "";
  document.getElementById("ageInfo").textContent = "";
  document.getElementById("summary-info").textContent = "";
}

function clearAll() {
  document.getElementById("movs").value = 0;
  document.getElementById("tickets").value = "";
  document.getElementById("age").value = "";
  document.getElementById("movieInfo").textContent = "";
  document.getElementById("priceInfo").textContent = "";
  document.getElementById("quantityInfo").textContent = "";
  document.getElementById("ageInfo").textContent = "";
  document.getElementById("summary-info").textContent = "";

  movieName = "";
  price = 0;
  tickets = 0;
  orderType = "";
  ticketType = "";
  total = 0;
  age = 0;
}
