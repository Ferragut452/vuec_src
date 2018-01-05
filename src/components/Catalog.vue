<template>
<div>
  <ul class="cats">
    <li class="cat" v-for="cat in cats" :key="cat.key">
      <img :src="cat.image" alt="cat">
      <div class="cat__caption">
        <strong class="cat__name">{{cat.name}}</strong>
        <span class="cat__price">${{cat.price}}</span>
        <button class="btn" @click="addToCart(cat)">Add to cart</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'catalog',
  computed: {
    cats() {
      return this.$store.state.cats;
    },
  },
  methods: {
    addToCart(item) {
      this.$store.commit('addToCart', item);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$brand_color: #4fc08d;
$brand_color_2: #2c3e50;

.cats {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // margin-bottom: 40px;
    // margin-top: 20px;
}

.cat {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 20px;
    background-color: #fff;
    box-shadow: 1px 1px 20px rgba(#000, 0.2);
    padding: 5px;
    &__caption {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 15px 10px;
        background-color: $brand_color_2;
        color: #fff;
        box-shadow: inset 1px 1px 20px rgba(#000, 0.5);
    }
    &__name {
        text-transform: uppercase;
    }
}
</style>
