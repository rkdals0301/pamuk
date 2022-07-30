<template>
  <div>
    <v-card
      v-for="(recipe, index) in recipeList" :key="index"
      class="mx-auto my-12" max-width="374">
      <v-img
        height="250"
        :src="recipe.image"></v-img>

      <v-card-title>
        {{recipe.title}}
        <v-rating
          length="1"
          :value="1"
          color="amber"
          readonly
          size="20">
        </v-rating>
        <span>
          4.5
        </span>
      </v-card-title>
      <v-card-text>
        <div>
          {{recipe.subtitle}}
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import recipeAPI from '@/services/api/recipe'
import SnackbarType from '@/utils/define/SnackbarType'
import { recipeList } from '@/views/recipe/RecipeDummy'

export default {
  name: 'Recipe',
  data() {
    return {
    }
  },
  computed: {
    recipeList() {
      return recipeList
    }
  },
  created() {
      this.loadRecipeList()
  },
  methods: {
    async loadRecipeList() {
      try {
        const response = await recipeAPI.lookupRecipeList()
        console.log('response >', response)
      } catch (error) {
        this.$root.showSnackbar(SnackbarType.ERROR, error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
