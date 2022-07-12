<template>
  <v-snackbar
      v-model="isShow"
      :multi-line="true"
    >
      {{ text }}
    <v-btn
        color="red"
        text
        @click="isShow = false"
    >
        Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
    name: 'Snackbar',
    data() {
        return {
            isShow: false,
            type: '',
            text: '',
        }
    },
    mounted() {
        this.$root.showSnackbar = (type, text) => {
            this.isShow = true
            this.type = type
            this.text = text
        }
    },
   
}
</script>

<style scoped>

</style>