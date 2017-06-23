'use strict';

var orders = []
var images = []

function Order(value, email, first, last, address, cc) {
  this.value = value;
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.address = address;
  this.cc = cc;
  orders.push(this);
};

function Pic(name, path) {
  this.id = name;
  this.path = path;
  images.push(this)
}

function convertForm() {
  event.preventDefault();
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var address = document.getElementById('address').value;
  var cc = document.getElementById('cc#').value;
  var value = document.getElementById('items').innerHTML; //"Cannot read property of null"
  new Order(value, email, firstName, lastName, address, cc);
  pushOrder();
}

var theForm = document.getElementById('theForm');
var btn = document.getElementById('btn');
var app = document.getElementById('append')

function pushOrder() {
  localStorage.clear();
  var ordersJSON = JSON.stringify(orders);
  localStorage.orders = ordersJSON;
}

function pullOrder() {
  var retrievedOrder = localStorage.orders;
  var parsedOrder = JSON.parse(retrievedOrder);
  for (var i = 0; i < parsedOrder.length; i++) {
    orders[i] = parsedOrder[i];
  }
}

theForm.addEventListener('submit', convertForm);

new Pic('bag','assets/bag.jpg');
new Pic('banana', 'assets/banana.jpg');
new Pic('bathroom', 'assets/bathroom.jpg');
new Pic('boots', 'assets/boots.jpg');
new Pic('breakfast', 'assets/breakfast.jpg');
new Pic('bubblegum', 'assets/bubblegum.jpg');
new Pic('chair', 'assets/chair.jpg');
new Pic('cthulhu', 'assets/cthulhu.jpg');
new Pic('dog-duck', 'assets/dog-duck.jpg');
new Pic('dragon', 'assets/dragon.jpg');
new Pic('pen', 'assets/pen.jpg');
new Pic('pet-sweep', 'assets/pet-sweep.jpg');
new Pic('scissors', 'assets/scissors.jpg');
new Pic('shark', 'assets/shark.jpg');
new Pic('sweep', 'assets/sweep.png');
new Pic('tauntaun', 'assets/tauntaun.jpg');
new Pic('unicorn', 'assets/unicorn.jpg');
new Pic('usb', 'assets/usb.gif');
new Pic('water-can.jpg', 'assets/water-can.jpg');
new Pic('wine-glass.jpg', 'assets/wine-glass.jpg');

if (localStorage) {
  pullOrder;
}

Order.prototype.render = function() {
  var trEl = document.createElement('tr');
  console.log('this is working')

  // var imgEl = document.createElement('img');
  // imgEl.src= this.path;
  // imgEl.id = this.id;
  // trEl.appendChild(imgEl);

  // var tdEl = document.createElement('td');
  // tdEl.textContent = this.value;
  // trEl.appendChild(tdEl);

  var tdEl = document.createElement('td');
  tdEl.textContent = this.firstName;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.lastName;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.email;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.address;
  trEl.appendChild(tdEl);

  app.appendChild(trEl);
}
