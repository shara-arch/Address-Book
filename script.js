function addressBook(){
    this.contacts = {};
    this.currentId = 0;
};

addressBook.prototype.assignId = function(){
    this.currentId++;
    return this.currentId;
};

addressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
    console.log(`[LOG] Contact Added Successfully`);
};

