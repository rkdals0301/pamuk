<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-bottom-navigation>
      <v-btn stacked>
        <v-icon icon="$receipt" />
        <span>Recipe</span>
      </v-btn>
    </v-bottom-navigation>
    <snackbar></snackbar>
  </v-app>
</template>

<script>
import Snackbar from '@/components/common/Snackbar.vue'

export default {
  name: 'App',
  components: {
    Snackbar
  }
}
</script>
