<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-bottom-navigation app>
      <v-btn>
        <span>Recipe</span>
        <v-icon>mdi-receipt</v-icon>
      </v-btn>
  </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
<style scoped>
  /* Vuetify Bug */
  .v-item-group.v-bottom-navigation .v-btn.v-size--default {
    height: inherit;
  }
</style>
