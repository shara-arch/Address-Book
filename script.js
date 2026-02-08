function addressBook(){
    this.contacts = {};
    this.currentId = 0;
};

addressBook.prototype.assignId = function(){
    this.currentId++;
    return this.currentId;
};