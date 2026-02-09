function addressBook(){
    this.contacts = {};
    
};


addressBook.prototype.assignId = function () {
    this.currentId++;
    return this.currentId;
};

addressBook.prototype.addContact = function(name, phone, email, address) {
    contact.id = this.assignId();
    this.contacts[contact.id];
   
    console.log(`Contact Added Successfully`);
};
addressBook.prototype.deleteContact = function(id) {
if(this.tasks[id]){
    delete this.contacts[id];
    return true;
}
return false;

};
function contact(name,number,email, address, id){
    this.name = name;
    this.number = number;
    this.email = email;
    this.address = address;
    this.id = id;
};
//Initialize System
const myContacts = new addressBook();

//Display Contacts
displayContacts: function(){
    const list document.getElementById("savedContacts");
    list.innerHTML = "";
    this.contacts.forEach((contact, index) => { 
        const contactDiv = document.createElement("div");
         contactDiv.classList.add("contact-item");
          contactDiv.innerHTML = ` <strong>${contact.fullName}</strong><br>
           📞 ${contact.phone}<br> ✉️ ${contact.email}<br>
            🏠 ${contact.address}<br> 
            <button onclick="AddressBook.deleteContact(${index})">Delete Contact</button> `;
            list.appendChild(contactDiv);
         });
}

