//Backend Logic

//Buisness Logic for Addressbook
function Addressbook() {
  this.contacts = [];
}

function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

// Frontend UI
$(document).ready(function() {
  event.preventDefault();
})