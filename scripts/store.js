'use strict';
/* global store, Item, cuid */

const store = (function(){

  const hideCheckedItems = false;
  const searchTerm =  '';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  const findById = function (id){
    return this.items.find(item => item.id === id);
  };
  
  const addItem = function (name){
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  };
  
  const findAndToggleChecked = function(id){
    let toggle = this.findById(id);
    toggle.checked = !toggle.checked;
  };
  
  const findAndUpdateName = function (id, newName){
    try {
      Item.validateName(newName);
      console.log(id, findById(id));
      this.findById(id).name = newName;
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  };
  
  const findAndDelete = function (id){
    console.log(id);
    let indexOfId = this.items.findIndex(val => val.id === id);
    this.items.splice(indexOfId, 1);
  };

  return {
    hideCheckedItems, searchTerm, 
    items, findById, addItem, 
    findAndToggleChecked, findAndUpdateName,
    findAndDelete,
  };

}());

