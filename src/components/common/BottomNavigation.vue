<template>
    <v-bottom-navigation app grow
        v-model="value"
        color="red">
        <v-btn value="RECIPE">
            <span>RECIPE</span>
            <v-icon>mdi-receipt</v-icon>
        </v-btn>
        <v-btn value="CART">
            <span>CART</span>
            <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn value="PROFILE">
            <span>PROFILE</span>
            <v-icon>mdi-account</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    name: 'BottomNavigation',
    data() {
        return {
            value: 'RECIPE'
        }
    },
    
}
</script>

<style lang="scss" scoped>
  /* Vuetify Bug */
.v-item-group.v-bottom-navigation .v-btn.v-size--default {
    height: inherit;
}
</style>