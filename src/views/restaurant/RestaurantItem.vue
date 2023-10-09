<template>
    <router-link
            class="card card-item"
            :to="{ path: `/restaurant/${item.url}` }"
          >
            <img
              :src="item.img"
              :alt="item.name"
              class="card-image"
              style="object-fit: contain"
            />
            <div class="card-text">
              <div class="card-heading">
                <h3 class="card-title">{{ item.name }}</h3>
                <span class="card-tag tag">{{ item.servetime }}</span>
              </div>
              <!-- /.card-heading -->
              <div class="card-info">
                <div class="rating">
                  {{ item.rating }}
                </div>
                <div class="price">{{ item.description }}</div>
                <div class="category">{{ item.category }}</div>
              </div>
              <!-- /.card-info -->
            </div>
            <!-- /.card-text -->
          </router-link>
</template>

<script>
export default {
    props: {
      item: {
        type: Object,
        default: () => ({})
      }
    }
}
</script>