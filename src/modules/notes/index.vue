<template>
  <NoteList />
</template>

<script>
import store from './_store'
import NoteList from './_components/NoteList'

export default {
  name: 'NoteModule',
  components: {
    NoteList
  },
  created () {
    const STORE_KEY = '$_note'
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store)
    }
  },
  mounted () {
  }
}
</script>
