
<template>
  <div>
    <label>child：</label>
    <span>{{childValue}}</span>
    <!-- 子组件事件传值 -->
    <input type='button' value='trigger' @click="childClick" />
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        childValue: 'this is child data'
      }
    },
    methods: {
      childClick() {
        // 子组件触发事件
        this.$emit('childChange', this.childValue);
      }
    }
  }
</script>