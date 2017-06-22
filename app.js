'use strict';

var orders = []

function Order(email, first, last, address, cc) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.address = address;
  this.cc = cc;
  orders.push(this);
};

function convertForm() {
  event.preventDefault();
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var email = document.getElementById('email');
  var address = document.getElementById('address');
  var cc = document.getElementById('cc#')
  new Order(email, firstName, lastName, address, cc);
  pushOrder();
}

var theForm = document.getElementById('theForm');
var btn = document.getElementById('btn');

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

if (localStorage) {
  pullOrder;
}
