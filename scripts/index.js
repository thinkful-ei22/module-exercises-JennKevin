'use strict';
/* global shoppingList, cuid */
/*eslint-env jquery*/
// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  const itemNames = [ '', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
      console.log(store);
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  });
  shoppingList.render();
  shoppingList.bindEventListeners();
});