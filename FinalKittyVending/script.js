// Create constants 
const btns = document.getElementsByClassName("btn");
const selection = document.getElementById("selection");
const selectionImg = document.getElementById("selectionImg");
const buyButton = document.getElementById("buyButton");
const buyName = document.getElementById("buyName");
const balanceNumber = document.getElementById("balanceNumber");
const upVote = document.getElementsByClassName("money");
const coinsandBillDisplay = document.getElementById("coinandBillDisplay");
var purchaseList = document.getElementById("purchaseList");
const upStock = document.getElementsByClassName("stock");
const stockDisplay = document.getElementById("stockDisplay");

// loop to create event listeners on currency that will call function addBalance.
for (let i = 0; i < upVote.length; i++) {
  upVote[i].addEventListener("click", addBalance, false);
}

// loop to create event listeners on currency that will call function addStock.
for (let h = 0; h < upStock.length; h++) {
  upStock[h].addEventListener("click", addStock, false);
}


// Start balanace of $0.
var balance = 0;

// create money object.
const coinsAndBills = {
  Fifty: 0,
  One: 0,
  Two: 0,

  updateWallet() {
    coinsandBillDisplay.innerHTML =
      "Fifty Cents: " +
      coinsAndBills.Fifty +
      ", One Dollar: " +
      coinsAndBills.One +
      ", Two Dollars: " +
      coinsAndBills.Two;
  },
};

// Handles currency logic to increase balance and update money count.
function addBalance(e) {
  if (e.target.id == "fiftyUp") {
    balance += 0.50;
    coinsAndBills.Fifty++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "oneUp") {
    balance += 1.00;
    coinsAndBills.One++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
  if (e.target.id == "twoUp") {
    balance += 2.00;
    coinsAndBills.Two++;
    balanceNumber.innerHTML = updateBalance(balance);
    coinsAndBills.updateWallet();
  }
}

// Handles balance display to round to nearst 2nd decimal place.
function updateBalance(value) {
  balance + Math.round((value + Number.EPSILON) * 100) / 100;
  return balance.toFixed(2);
}

// Hide buy button until drink selection has been made.
buyButton.style.display = "none";

// loop to create event listeners on drink selection buttons that will call select function.
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", select, false);
}

// event listener on buy button that will call buy function.
buyButton.addEventListener("click", buy);
class Drink {
  constructor(_name, _price, _image) {
    this.name = _name;
    this.price = _price;
    this.image = _image;
  }
  printDescription() {
    var text =
      this.name +
      "</br>Price: $" +
      this.price;
    return text;
  }
}

// Create drink objects name, price, image src.
const plain = new Drink("Plain Milk", 4.0, "images/plainmilk.png");
const strawb = new Drink("Strawberry Milk", 5.0, "images/strawbmilk.png");
const banana = new Drink("Banana Milk", 4.5, "images/bananamilk.png");
const taro = new Drink("Taro Milk", 6.0, "images/taromilk.png");


// create stock object
var stock = { 
  plain: 5, 
  banana: 5,
  strawberry: 5,
  taro: 5,
}

// create money object.
var stock = {
  plain: 5,
  banana: 5,
  strawberry: 5,
  taro: 5,

  updateStock() {
    stockDisplay.innerHTML =
      "Plain Milk: " +
      stock.plain +
      ", Strawberry Milk: " +
      stock.strawberry +
      ", Banana Milk: " +
      stock.banana +
      ", Taro Milk: " +
      stock.taro;
  },
};


// Determines which button was pressed and displays corresponding drink object with buy button.
function select(e) {
  if (e.target.textContent == "Plain Milk") {
    selection.innerHTML = plain.printDescription();
    selectionImg.src = plain.image;
    buyButton.style.display = "block";
    buyName.innerHTML = plain.name;
  }
  if (e.target.textContent == "Strawberry Milk") {
    selection.innerHTML = strawb.printDescription();
    selectionImg.src = strawb.image;
    buyButton.style.display = "block";
    buyName.innerHTML = strawb.name;
  }
  if (e.target.textContent == "Banana Milk") {
    selection.innerHTML = banana.printDescription();
    selectionImg.src = banana.image;
    buyButton.style.display = "block";
    buyName.innerHTML = banana.name;
  }
  if (e.target.textContent == "Taro Milk") {
    selection.innerHTML = taro.printDescription();
    selectionImg.src = taro.image;
    buyButton.style.display = "block";
    buyName.innerHTML = taro.name;
  }
}

// Determines which buy button you press and subtracts appropriate price from balance. Also subtracts stock. Also adds product to the purchase list. 
// Alerts when there is not enough money
// Decreases stock when item is bought
function buy(e) {
  if (e.target.textContent == "Buy Plain Milk" || e.target.textContent == "Plain Milk") {
    if (stock.plain <= 0) {
      alert("Plain Milk out of stock. Please restock.")
    }
    else if (balance - plain.price >= 0) {
      balance = balance - plain.price;
      balanceNumber.innerHTML = updateBalance(balance);
      stock.plain = stock.plain - 1;
      stock.updateStock();
      addToList(plain.name);
    } else {
      alert("Insufficient funds. Please insert more money.");
    }
  }

  if (e.target.textContent == "Buy Strawberry Milk" || e.target.textContent == "Strawberry Milk"){
    if (stock.strawberry <= 0) {
      alert("Strawberry Milk out of stock. Please restock.")
    }
      else if (balance - strawb.price >= 0) {
        balance = balance - strawb.price;
        balanceNumber.innerHTML = updateBalance(balance);
        stock.strawberry = stock.strawberry - 1;
        stock.updateStock();
        addToList(strawb.name);
      } else {
        alert("Insufficient funds. Please insert more money.");
      }
  }

  if (e.target.textContent == "Buy Banana Milk" || e.target.textContent == "Banana Milk") {
    if (stock.banana <= 0) {
      alert("Banana Milk out of stock. Please restock.")
    }
      else if (balance - banana.price >= 0) {
        balance = balance - banana.price;
        balanceNumber.innerHTML = updateBalance(balance);
        stock.banana = stock.banana - 1;
        stock.updateStock();
        addToList(banana.name);
      } else {
        alert("Insufficient funds. Please insert more money.");
      }
    }
  
  if (e.target.textContent == "Buy Taro Milk" || e.target.textContent == "Taro Milk") {
    if (stock.taro <= 0) {
      alert("Taro Milk out of stock. Please restock.")
    }
    else if (balance - taro.price >= 0) {
      balance = balance - taro.price;
      balanceNumber.innerHTML = updateBalance(balance);
      stock.taro = stock.taro - 1;
      stock.updateStock();
      addToList(taro.name);
    } else {
      alert("Insufficient funds. Please insert more money.");
    }
  }
  }
  

// Adds purchase to list on left hand side.
function addToList(purchase) {
  let li = document.createElement("li");
  let t = document.createTextNode(purchase + " 1x");
  li.appendChild(t);
  purchaseList.appendChild(li);
}

// Create variables for admin
var password;
var showButton = document.getElementById("showButton");

// Hide stock button until password is put in
showButton.style.display="none";

// Asks user for password and allows for admin access
function showAdmin(){
  password = prompt("Please enter the correct password to access stock.");

  if (password == "hellokitty"){
    showButton.style.display="block";
  }
  else{
    alert("That's the wrong password!");
  }
}

// Button to hide admin
function hideAdmin(){
  showButton.style.display="none";
}

// Restock functions

// Restock plain milk
function pStock(){
  stock.plain++;
  return stock.plain;
}

// Restock strawberry milk
function sStock(){
  stock.strawberry++;
  return stock.strawberry;
}

// Restock banana milk
function bStock(){
  stock.banana++;
  return stock.banana;
}

// Restock taro milk
function tStock(){
  stock.taro++;
  return stock.taro;
}

// When restock button is clicked, stock count is updated
function addStock(s) {
  if (s.target.id == "pUp") {
    stock.updateStock();
  }
  if (s.target.id == "bUp") {
    stock.updateStock();
  }
  if (s.target.id == "sUp") {
    stock.updateStock();
  }
  if (s.target.id == "tUp"){
    stock.updateStock();
  }
}










