<template>
<div id="app">
  <header class="header">
    <div class="container container-header">
      <h1 class="logo">Cats shop</h1>
      <cart></cart>
    </div>
  </header>
  <div class="container">
    <transition name="fade" mode="out-in">
      <component :is="$store.state.component">
      </component>
    </transition>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
@import "./node_modules/normalize-scss/sass/normalize/import-now";

@import url('https://fonts.googleapis.com/css?family=Maven+Pro|Permanent+Marker');

$brand_color: #4fc08d;
$brand_color_2: #2c3e50;

body {
    font-family: 'Maven Pro', sans-serif;
    background-image: url("./assets/sketch.png");
    font-size: 18px;
}

ul {
    list-style-type: none;
    padding: 0;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding-left: 80px;
    padding-right: 80px;
    margin-bottom: 40px;
    margin-top: 40px;
}

.container-header {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0;
}

.header {
    background-color: $brand_color;
    background-image: url("./assets/subtlenet.png");
    box-shadow: 1px 1px 10px rgba(#000, 0.2);
}

.btn {
    font-size: 14px;
    border: 2px solid #fff;
    background-color: $brand_color;
    border-radius: 20px;
    padding: 5px 10px;
    box-shadow: 1px 1px 2px rgba(#000, 0.5);
    color: #fff;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        background-color: darken($brand_color, 10%);
    }
    &:focus {
        outline: none;
    }
    &-cart {
        width: 30px;
        height: 30px;
        padding: 5px;
    }
}

.logo {
    font-family: 'Permanent Marker', cursive;
    font-weight: 400;
    font-size: 42px;
    letter-spacing: 4px;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 5px rgba(#000, 0.4);
    margin-bottom: 30px;
}

.cat__name {
    text-transform: uppercase;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease;
}

.fade-enter {
    opacity: 0;
    transform: translateY(40px);
}
/* .fade-leave-active до версии 2.1.8 */
.fade-leave-to {
    opacity: 0;
    transform: translateY(40px);
}

.fade-cart-enter-active,
.fade-cart-leave-active {
    transition: all 0.15s ease;
}

.fade-cart-enter,
.fade-cart-leave-to {
    opacity: 0;
    transform: translateX(20px);
}
</style>
