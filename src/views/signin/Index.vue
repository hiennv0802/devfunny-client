<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Signin',
  data () {
    return {
      title: 'Signin',
      msg: 'Signin page'
    }
  },
  head: {
    title: function () {
      return {
        inner: this.title
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  font-weight: normal;
}
</style>
