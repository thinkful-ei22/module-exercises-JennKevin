'use strict';
/* global store, Item, cuid */

const findById = function (id){
  return store.items.find(item => item.id === id);
};

const addItem = function (name){
  try {
    Item.validateName(name);
    store.items.push(Item.create(name));
  } catch(error) {
    console.log('Cannot add item: ' + error.message);
  }
};

const findAndToggleChecked = function(id){
  let toggle = findById(id);
  toggle.checked = !toggle.checked;
};

const findAndUpdateName = function (id, newName){
  try {
    Item.validateName(newName);
    console.log(id, findById(id));
    findById(id).name = newName;
  } catch(error) {
    console.log('Cannot add item: ' + error.message);
  }
};

const store = (function(){

  const hideCheckedItems = false;
  const searchTerm =  '';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  return {
    hideCheckedItems, searchTerm, 
    items, findById, addItem, 
    findAndToggleChecked, findAndUpdateName
  };
}());

