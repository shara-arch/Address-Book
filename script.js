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

const myContacts = new addressBook();

