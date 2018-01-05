<template>
<div>
  <transition name="fade-cart">
    <div class="cart-block" v-if="$store.state.component=='catalog'">
      <div :class="{cartanim: $store.state.cartAnim}" v-on:animationend="$store.state.cartAnim = false" class="cart-icon btn" @click="$store.state.showCart = !$store.state.showCart;">
        <div class="cart-img">
          <img src="../assets/cart.svg" alt="">
        </div>
        <transition name="fade">
          <p v-if="totalPrice != 0">{{ totalQty }} = ${{totalPrice}}</p>
        </transition>
      </div>
      <transition name="fade-cart">
        <div class="cart" v-show="$store.state.showCart">
          <div v-show="items.length > 0">
            <transition-group name="fade" tag="ul" class="cart__list">
              <li class="cart__item" v-for="item in items" :key="item.details.name">
                <p>
                  <strong class="cat__name">{{ item.details.name }}</strong> x {{ item.quantity }} = ${{Math.round((item.quantity*item.details.price) * 100) / 100}}
                </p>
                <div class="cart__buttons">
                  <button class="btn btn-cart" @click="$store.commit('addQty', item)">+</button>
                  <button class="btn btn-cart" @click="$store.dispatch('decQty', item)">-</button>
                  <button class="btn btn-cart" @click="$store.commit('removeFromCart', item)">x</button>
                </div>
              </li>
            </transition-group>
            <div class="cart__total">
              <p><strong>{{ totalQty }}</strong> = ${{totalPrice}}</p>
              <button class="btn btn-cart" v-on:click="$store.commit('clearCart')">x</button>
            </div>
            <div class="cart__checkout"><button class="btn" @click="$store.state.component = 'checkout'">Check out</button></div>
          </div>
          <div v-show="items.length === 0">
            <p class="cart__empty">You have no cats!</p>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';

export default {
  name: 'cart',
  computed: {
    items() {
      return this.$store.state.items;
    },
    ...mapGetters([
      'totalPrice',
      'totalQty',
    ]),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$brand_color: #4fc08d;
$brand_color_2: #2c3e50;

.cart-block {
    position: relative;
}

.cart {
    position: absolute;
    min-width: 350px;
    top: 60px;
    right: 0;
    background-color: rgba($brand_color_2, 0.8);
    box-shadow: 1px 1px 5px rgba(#000, 0.2);
    color: #fff;
    border: 2px solid #fff;
    &__list {
        margin-top: 0;
        margin-bottom: 0;

    }
    &__item {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-between;
        -ms-align-items: center;
        align-items: center;
        background-color: $brand-color_2;

        padding: 10px;
        margin: 0;
        box-shadow: inset 1px 1px 5px rgba(#000, 0.5);
        p {
            margin-top: 0;
            margin-bottom: 0;
        }
    }
    &__total {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-between;
        background-color: mix($brand-color, #ccc);
        color: $brand_color_2;
        padding: 0 10px;
        margin: 0;
        box-shadow: inset 1px 1px 5px rgba(#000, 0.5);
        button {
            align-self: center;
        }
    }
    .cart__checkout {
        background-color: $brand-color_2;
        box-shadow: inset 1px 1px 5px rgba(#000, 0.5);
        padding: 20px;
        button {
            display: block;
            margin: 0 auto;
        }
    }
    &__empty {
        text-align: center;
    }
}

.cart-icon {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    align-items: center;
    border-radius: 50px;
    padding: 5px 8px;
    transition: all 0.3s ease-in-out;
    img {
        width: 25px;
        height: 25px;
        margin-top: 3px;
        margin-right: 3px;
    }
    p {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 5px;
    }
}

.cartanim {
    animation: cartAnim 0.4s ease-in-out;
}

@-webkit-keyframes cartAnim {
    from {
        background-color: $brand_color;
        box-shadow: 1px 1px 2px rgba(#000, 0.5);
    }
    20% {
        background-color: darken($brand_color, 7%);
        box-shadow: 0 0 15px #fff;
    }
    to {
        background-color: $brand_color;
        box-shadow: 1px 1px 2px rgba(#000, 0.5);
    }
}
</style>
