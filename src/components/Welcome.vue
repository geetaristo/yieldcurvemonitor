<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    {{treasurydata}}
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  vuex: {
    getters: {
      treasurydata: state => state.treasurydata
    }
  },
  computed: {
    treasurydata () {
      return this.$store.state.treasurydata
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
