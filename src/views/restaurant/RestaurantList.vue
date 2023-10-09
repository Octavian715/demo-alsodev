<template>
     <div class="cards cards-restaurant" v-if="list.length">
        <RestaurantItem
        v-for="(item, index) in list"
        :item="item"
        :key="index"
        />
     </div>
     <div  class="empty" v-else>{{ alertMessage }}</div>
</template>
<script>
import RestaurantItem from './RestaurantItem.vue';
export default {
    components: { RestaurantItem },
    props: {
      list: {
        type: Array,
        default: () => []
      },
      alertMessage: {
        type: String,
        default: 'не найдено.'
      }
    }
}
</script>