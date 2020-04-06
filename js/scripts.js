//Backend Logic

//Buisness Logic for Addressbook
function Addressbook() {
  this.contacts = [];
}

Addressbook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}

//Buisness Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

var addressBook = new Addressbook();
var contact = new Contact("Ada", "Lovelace", "503-555-0100");
var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
addressBook.addContact(contact);
addressBook.addContact(contact2);

// Frontend UI
$(document).ready(function() {
  event.preventDefault();
})