<template>
  <div class="menuRoot">
    <router-link to="/" class="logo" :style="{backgroundImage: `url(${logo})`}"/>
    <div class="menuWrapper">
      <router-link
        v-for="{title, route} in pages"
        :to="route"
        :key="route"
        exact
        active-class="active"
        class="menuLink"
      >
        {{ title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

import { MenuModule } from '@/store/modules/menu';

@Component({
  name: 'Menu',
})
export default class Menu extends Vue {
  get pages() {
    return MenuModule.pages;
  }

  get logo() {
    return MenuModule.logo;
  }
}
</script>
<style lang="scss" scoped >
.menu {
  &Root {
    display: flex;
    align-items: start;
    border-bottom: 1px solid #000;
    padding: 20px;
  }

  &Wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: -15px;
    margin-bottom: -15px;

    @media screen and (max-width: 768px) {
      justify-content: start;
    }
  }

  .logo {
    width: 100px;
    height: 50px;
    background: no-repeat center / contain;
  }

  &Link {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 10px 15px;
    background-color: #e2e2e2;
    border-radius: 5px;
    margin-left: 15px;
    margin-bottom: 15px;

    &:hover, &.active {
      color: #373af3;
    }
  }
}

</style>
