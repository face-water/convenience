<template>
  <div id="app">
    <NavBar/>
   
    <router-view></router-view>
    <ProductList/>
  
    <ShoppingCart/>
   
  </div>
</template>

<script type="text/javascript">

import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
import NavBar from './NavBar.vue'

export default {
  data() {
      return {
        
      }
    },
  components: { ProductList, ShoppingCart, NavBar }
}
</script>
