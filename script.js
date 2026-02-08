function addressBook(){
    this.contacts = {};
    this.currentId = 0;
};

addressBook.prototype.assignId(){
    this.currentId++;
    return this.currentId;
};