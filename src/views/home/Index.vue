<template>
  <div>
    <h1>{{ msg }}</h1>
    <NotesContainer />
  </div>
</template>

<script>
import NotesContainer from '@/modules/notes'

export default {
  name: 'Home',
  components: {
    NotesContainer
  },
  data () {
    return {
      title: 'Home',
      msg: 'Home page'
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
</style>
