<template>
  <ul class="menu">
    <li class="menu__item"
        v-for="(item, index) in menuList"
        :key="index">
      <router-link :to="item.routing"
                    class="menu__link"
                    active-class="menu__link--active"
      >
        <div class="menu__icon">
          <div :class="item.className"></div>
        </div>
        <div class="menu__text">{{ item.title }}</div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { menuList } from './menu'

export default {
  data() {
    return {
      menuList
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/theme/mixins/menu';
@import '../../assets/theme/variables/colors';

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;

  &__icon {
    &--kpir {
      @include font-icon('\e04c');
    }
    &--vat {
      @include font-icon('\e049');
    }
    &--contractors {
      @include font-icon('\e001');
    }
    &--fixed-assets {
      @include font-icon('\e05c');
    }
  }

  &__link {
    min-width: 80px;
    padding: 5px 0;
    cursor: pointer;
    opacity: 0.55;
    font-size: 11px;
    color: #ffffff !important;
    min-width: 80px;
    display: flex;
    flex-direction: column;
    padding-top: 12px;
    text-decoration: none !important;
    &:hover {
      opacity: 0.8;
    }
    &--active {
      opacity: 1;
      position: relative;
      &::after {
        left: 100%;
        top: 50%;
        transform: translate(0, -50%);
        border: solid transparent;
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-left-color: $greenSpring;
        border-width: 7px;
        z-index: 50;
      }
    }
  }
}
</style>
