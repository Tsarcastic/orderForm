
'use strict';

var orders = []
var images = []


function Order(email, first, last, address, cc) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.address = address;
  this.cc = cc;
};

function Pic(name, path) {
  this.id = name;
  this.path = path;
  images.push(this)
}

function convertForm() {
  event.preventDefault();
  var value = document.getElementById('items');
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');
  var address = document.getElementById('address');
  var cc = document.getElementById('cc#')
  Order(email, firstName, lastName, address, cc);

var allOrders = []


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

  var imgEl = document.createElement('img');
  imgEl.src= this.path;
  imgEl.id = this.id;
  trEl.appendChild(imgEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.firstName;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.lastName;
  trEl.appendChild(tdEl);



}

