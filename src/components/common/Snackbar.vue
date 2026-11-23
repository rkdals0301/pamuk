<template>
  <v-snackbar v-model="isShow" multi-line>
    {{ text }}
    <template #actions>
      <v-btn color="red" variant="text" @click="isShow = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Snackbar',
  data() {
    return {
      isShow: false,
      text: '',
      unsubscribe: null
    }
  },
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/setSnackbar') {
        this.text = state.snackbar.text
        this.isShow = true
      }
    })
  },
  beforeUnmount() {
    this.unsubscribe()
  }
}
</script>
