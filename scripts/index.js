'use strict';
/* global shoppingList, cuid */
/*eslint-env jquery*/
// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  const itemNames = [ ];
  shoppingList.render();
  shoppingList.bindEventListeners();
});