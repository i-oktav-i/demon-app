<template>
  <div class="footerRoot">
    <div class="footerLinks">
      <router-link
        v-for="{title, route} in pages"
        :to="route"
        active-class="active"
        exact
        :key="route"
        class="footerLink"
      >
        {{ title }}
      </router-link>
    </div>
    <p class="copy">
      &copy; Сверх Демон, 2020
    </p>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

import { MenuModule } from '@/store/modules/menu';

@Component({
  name: 'Footer',
})
export default class Footer extends Vue {
  // eslint-disable-next-line class-methods-use-this
  get pages() {
    return MenuModule.pages;
  }
}
</script>
<style lang="scss" scoped >
.footer {
  &Root {
    background-color: #1f2431;
    padding: 10px 30px;
  }

  &Links {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-bottom: -15px;
  }

  &Link {
    display: block;
    text-decoration: none;
    color: #fff;
    padding: 10px 15px;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-left: 15px;
    margin-bottom: 15px;

    &:hover, &.active {
      color: #8d96b2;
      border-color: #8d96b2;
    }
  }

  .copy {
    text-align: left;
    margin-top: 10px;
    color: #8d96b2;
  }
}

</style>
