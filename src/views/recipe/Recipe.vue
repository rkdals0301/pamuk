<template>
    <v-card
    max-width="450"
    class="mx-auto"
  >
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-divider
          v-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>

import recipeAPI from '@/services/api/recipe'

export default {
  name: 'Recipe',
  data() {
    return {
      items: [
        {
          avatar: 'https://image.shutterstock.com/image-photo/korea-traditional-food-rice-soup-600w-1889514112.jpg',
          title: '된장찌개',
          subtitle: '된장찌개 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/kimchi-soup-tofu-pork-bowl-600w-2003710910.jpg',
          title: '김치지깨',
          subtitle: '김치찌개 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/sundubu-jjigae-spicy-stew-tofu-600w-1688361820.jpg',
          title: '순두부찌개',
          subtitle: '순두부찌개 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/pork-cutlet-shredded-cabbage-worcestershire-600w-1934827055.jpg',
          title: '돈까스',
          subtitle: '돈까스 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/homemade-italian-spaghetti-algio-e-600w-2140423159.jpg',
          title: '알리오올리오 파스타',
          subtitle: '알리오올리오 파스타 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/penne-pasta-tomato-sauce-chicken-600w-275882210.jpg',
          title: '토마토 파스타',
          subtitle: '토마토 파스타 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/pasta-spaghetti-pesto-sauce-fresh-600w-1969988881.jpg',
          title: '바질페스토 파스타',
          subtitle: '바질페스토 파스타 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/sandwich-ham-cheese-tomatoes-lettuce-600w-1019452444.jpg',
          title: '샌드위치',
          subtitle: '샌드위치 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/image-korean-food-bulgogi-gimbap-600w-1910107768.jpg',
          title: '김밥',
          subtitle: '김밥 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/mung-bean-sprouts-soup-sliced-600w-1657241404.jpg',
          title: '콩나물국',
          subtitle: '콩나물국 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/homemade-kimchi-fried-rice-topped-600w-1254756118.jpg',
          title: '김치볶음밥',
          subtitle: '김치볶음밥 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/korean-food-feast-noodles-banquet-600w-1721501578.jpg',
          title: '잔치국수',
          subtitle: '잔치국수 재료'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://image.shutterstock.com/image-photo/makguksu-buckwheat-noodles-korean-traditional-600w-2133248389.jpg',
          title: '함흥냉면',
          subtitle: '함흥냉면 재료'
        }
      ]
    }
  },
  async created() {
      const response = await recipeAPI.lookupRecipeList()
      console.warn(response)
  }
}
</script>

<style scoped>

</style>
