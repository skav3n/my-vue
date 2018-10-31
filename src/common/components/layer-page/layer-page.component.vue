<template>
  <div class="layer-page">
    <div v-if="title" class="layer-page__header">
      <span class="md-headline">{{ title }}</span>
    </div>
    <div class="layer-page__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
    }
  },
}
</script>

<style scoped lang="scss">
.layer-page {
  &__header {
    margin-bottom: 15px;
  }
}
</style>
