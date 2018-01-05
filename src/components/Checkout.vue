<template>
<div>
  <div class="checkout">
    <div class="checkout__content">
      <div class="checkout__heading">
        <h2> In your cart: <span>{{ totalQty }}</span> = <span> ${{ totalPrice }}</span></h2>
        <button class="btn btn-cart" v-on:click="$store.commit('clearCart')">x</button>
      </div>
      <transition-group name="fade" tag="ul" class="cart__list">
        <li class="checkout__item" v-for="item in items" :key="item.details.name">
          <div class="item">
            <img class="item__image" :src="item.details.image" alt="cat">
            <div class="item__text">
              <p>
                <strong>{{ item.details.name }}</strong> x <span>{{ item.quantity }}</span> = <span>${{ Math.round((item.quantity*item.details.price) * 100) / 100 }}</span>
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique velit, eum. Ex, qui! Voluptatibus vel quam natus nihil.</p>
            </div>


          </div>
          <div class="item__buttons">
            <button class="btn btn-cart" v-on:click="$store.commit('addQty', item)">+</button>
            <button class="btn btn-cart" v-on:click="$store.dispatch('decQty', item)">-</button>
            <button class="btn btn-cart" v-on:click="$store.commit('removeFromCart', item)">x</button>
          </div>
        </li>
      </transition-group>
    </div>
    <div class="checkout__footer">
      <div class="checkout__menu">
        <button class="btn" v-on:click="$store.commit('toCatalog')">Back to catalog</button>
        <button class="btn" v-on:click="$store.commit('looksGood')">Looks Good</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';

export default {
  name: 'checkout',
  computed: {
    items() {
      return this.$store.state.items;
    },
    ...mapGetters([
      'totalPrice',
      'totalQty',
    ])
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$brand_color: #4fc08d;
$brand_color_2: #2c3e50;

.checkout {
    margin-top: 40px;
    box-shadow: 1px 1px 10px rgba(#000, 0.2);

    &__heading {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-top: 0;
        text-shadow: 1px 1px 2px rgba(#000, 0.5);
        button {
            margin-left: 10px;
        }
    }
    &__content {
        background-color: $brand_color;
        background-image: url("../assets/subtlenet.png");
        padding: 20px;
    }
    &__item {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0;
        margin-bottom: 0;
        padding: 10px;
        color: #fff;
        background-color: $brand_color_2;
        box-shadow: inset 1px 1px 10px rgba(#000, 0.2);
        p {
            margin-left: 10px;
        }
        .item {
            display: -webkit-flex;
            display: -ms-flex;
            display: flex;
            align-items: center;
            max-width: 600px;
            img {
                height: 100px;
                border: 2px solid rgba(#fff, 0.2);
                box-shadow: 1px 1px 10px rgba(#000, 0.2);
            }
        }
    }
    &__footer {
        background-color: $brand-color_2;
        padding: 20px;
        color: #fff;
    }

    &__menu {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__total {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        h5 {
            margin-top: 0;
            margin-bottom: 0;
            text-transform: uppercase;
        }
        span {
            margin-left: 5px;
            margin-right: 5px;
        }
    }
}
</style>
