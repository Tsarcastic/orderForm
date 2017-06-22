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
}

var theForm = document.getElementById('theForm');
var btn = document.getElementById('btn');

theForm.addEventListener('submit', convertForm)
