<template>
  <div>
    sum：{{count}} 
    <button @click='addList'>change</button>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        count: 1,
        todoLists: []
      }
    },
    created() {
      
    },
    computed: {
      todoCount: function() {
        return this.$store.state.add;
      }
    },
    methods: {
      addList() {
        var count = this.count++;
        this.$store.commit('ADD', count);
      }
    }
  }
</script>