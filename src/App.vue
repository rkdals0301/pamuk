<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <bottom-navigation></bottom-navigation>
    <snackbar></snackbar>
  </v-app>
</template>

<script>
import BottomNavigation from '@/components/common/BottomNavigation.vue'
import Snackbar from '@/components/common/Snackbar.vue'

export default {
  name: 'App',
  components: {
    BottomNavigation,
    Snackbar
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
