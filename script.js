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
addressBook.prototype.deleteContact = function(id) {
if(this.tasks[id]){
    delete this.contacts[id];
    return true;
}
return false;

};
function contact(name,number,email){
    this.name = name;
    this.number = number;
    this.email = email;
    this.id = null;
};
