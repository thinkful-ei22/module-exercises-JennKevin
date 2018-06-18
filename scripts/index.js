'use strict';
/* global shoppingList, cuid */
/*eslint-env jquery*/
// eslint-disable-next-line no-unused-vars
const store = {
  items: [
    { id: 'cuid()', name: 'apples', checked: false },
    { id: 'cuid()', name: 'oranges', checked: false },
    { id: 'cuid()', name: 'milk', checked: true },
    { id: 'cuid()', name: 'bread', checked: false }
  ],
  hideCheckedItems: false,
  searchTerm: ''
};

$(document).ready(function() {
  const itemNames = [ '', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  });
  shoppingList.render();
  shoppingList.bindEventListeners();
  shoppingList.render();
});