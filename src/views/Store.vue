<template>
  <div class="store">
    <div class="cards">
      <div
        class="card"
        v-for="(item, i) in items"
        :key="i"
      >
        <div class="img" :style="{backgroundImage: `url(${item.img})`}" />
        <p class="text">{{ item.text }}</p>
        <div class="info">
          <span class="square">
            {{ item.square }} м<sup>2</sup>
          </span>
          <span class="price">
            от {{ item.price }}Р
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { StoreModule } from '@/store/modules/store';

@Component({
  name: 'FormPage',
})
export default class Menu extends Vue {
  get items() {
    return StoreModule.items;
  }
}
</script>

<style lang="scss" scoped>
.store {
  .cards {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-bottom: -15px;

    width: 1071px;
    margin: auto;

    @media screen and (max-width: 1070px) {
      width: 714px;
    }

    @media screen and (max-width: 713px) {
      width: 357px;
    }
  }

  .card {
    padding: 20px;
    border: 1px solid #000;
    box-sizing: border-box;
    width: 342px;
    margin-left: 15px;
    margin-bottom: 15px;

    .img {
      width: 300px;
      height: 200px;
      background: no-repeat center / contain;
    }

    .text {
      font-weight: 500;
      text-align: left;
      margin-top: 10px;
    }

    .info {
      display: flex;
      margin-top: 10px;
    }

    .square {
      padding: 5px 10px;
      background-color: #e42626;
      color: #fff;
    }

    .price {
      margin-left: auto;
    }
  }
}
</style>
