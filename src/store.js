import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var STORAGE_KEY = 'cats-1.0'
var itemsStorage = {
  fetch: function() {
    var items = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    return items;
  },
  save: function(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }
}

import cats from './db';

export const store = new Vuex.Store({
  state: {
    cats: cats,
    items: itemsStorage.fetch(),
    showCart: false,
    component: "catalog",
    cartAnim: false,
  },
  getters: {
    totalPrice(state) {
      var total = 0;
      for (var i = 0; i < state.items.length; i++) {
        total += state.items[i].details.price * state.items[i].quantity;
      }
      return Math.round(total * 100) / 100;
    },
    totalQty(state) {
      var sum = state.items.reduce(function(prevVal, elem) {
        return prevVal + elem.quantity;
      }, 0);

      if (sum == 1) {
        return sum + " cat"
      } else {
        return sum + " cats"
      }
    },
  },
  mutations: {
    addQty(state, item) {
      item.quantity++;
    },
    decQty(state, item) {
      item.quantity--;
    },
    removeFromCart(state, item) {
      state.items.splice(state.items.indexOf(item), 1);
      if (state.items.length == 0) {
        state.component = "catalog";
      }
    },
    clearCart(state) {
      state.component = "catalog";
      let arr = state.items;
      for (var i = arr.length; i > 0; i--) {
        arr.pop();
      }
      return arr;
    },
   toCatalog (state) {
     state.component = "catalog";
     state.showCart = false;
   },
   looksGood() {
     alert("Looks Good");
   },
   addToCart(state, item) {
     state.cartAnim = true;
     const itemInCart = state.items.findIndex(i => {
       return i.details.id === item.id
     })
     if (itemInCart === -1) {
       state.items.unshift({
         details: item,
         quantity: 1
       })
     } else {
       state.items[itemInCart].quantity++
     }
   },
 },
 actions: {
   decQty: (context, item) => {
     context.commit('decQty', item);
     if (item.quantity <= 0) {
       context.commit('removeFromCart', item);
     }
   }
 }
});


store.watch( (state) => {
  let items = state.items;
  itemsStorage.save(items);
});
