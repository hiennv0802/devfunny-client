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
      msg: 'Home page'
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
