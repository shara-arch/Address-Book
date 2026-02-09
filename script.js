function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
}

AddressBook.prototype.assignId = function () {
    this.currentId++;
    return this.currentId;
};

AddressBook.prototype.addContact = function(name, phone, email, address) {
    const newContact = new Contact(name, phone, email, address);
    newContact.id = this.assignId();
    this.contacts[newContact.id] = newContact;

    console.log('Contact Added Successfully');
    this.displayContacts();
};

AddressBook.prototype.deleteContact = function(id) {
    if (this.contacts[id]) {
        delete this.contacts[id];
        this.displayContacts();
        return true;
    }
    return false;
};

AddressBook.prototype.displayContacts = function() {
    const list = document.getElementById("contactDisplay");
    list.innerHTML = "";

    const contactEntries = Object.values(this.contacts);

    if (contactEntries.length === 0) {
        list.innerHTML = "<p>No contacts saved yet.</p>";
    } else {
        contactEntries.forEach(contact => {
            const contactCard = document.createElement("div");
            contactCard.classList.add("contact-item");
            contactCard.innerHTML = `
                <strong>${contact.name}</strong><br>
                📞 ${contact.phone}<br>
                📧 ${contact.email}<br>
                🏠 ${contact.address}<br>
                <button onclick="myContacts.deleteContact(${contact.id})">Delete Contact</button>
            `;
            list.appendChild(contactCard);
        });
    }

    document.getElementById("contactCount").textContent = contactEntries.length;
};

function Contact(name, phone, email, address) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.address = address;
    this.id = null;
}

// Initialize system
const myContacts = new AddressBook();


function createContact(event) {
    if (event) event.preventdefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    // Data Validation
     if (!name || !phone || !email) {
         alert("Please fill in Full Name, Phone Number, and Email before saving."); 
         return; 
         }

    
    //  Capitalize first letter of the name
    
    const contactName = name
     .split(/\s+/ ) 
     .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
     .join(" ");
     
    myContacts.addContact(contactName, phone, email, address);

    //clear form after saving
    document.querySelector("form").reset();
}
