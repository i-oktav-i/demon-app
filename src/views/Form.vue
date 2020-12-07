<template>
  <div class="formPage">
    <div class="form">
      <el-input
        placeholder="Площадь участка (в квадратных метрах)"
        v-model="input1"
      />
      <el-input
        placeholder="Количество парковочных мест"
        v-model="input2"
      />
      <el-input
        placeholder="Тип домика"
        v-model="input3"
      />

      <el-select v-model="selec1Value" placeholder="Тип хуя">
        <el-option
          v-for="item in select1"
          :key="item"
          :label="item"
          :value="item">
        </el-option>
      </el-select>
      <el-button
        v-loading="isLoading"
        @click="onClick"
      >
        ПИПИСЬКА
      </el-button>
    </div>

    <div class="img" :style="{backgroundImage: `url(${imgUrl})`}" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'FormPage',
})
export default class Menu extends Vue {
  input1: number | null = null

  input2: number | null = null

  input3: number | null = null

  select1 = [
    'хуй',
    'все же хуй?',
    'Или хуй',
  ]

  select1Value = this.select1[0]

  isLoading: boolean | null = null

  async onClick() {
    this.isLoading = true;

    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));

    this.isLoading = false;
  }

  images = [
    'https://yt3.ggpht.com/a/AATXAJx_ORV9RJbkswXpGTgkpFM3yGGrOg6MNT3-9A=s900-c-k-c0xffffffff-no-rj-mo',
  ]

  get imgUrl() {
    if (this.isLoading || this.isLoading === null) return '';

    return this.images[Math.floor(Math.random() * this.images.length)];
  }
}
</script>

<style lang="scss" scoped>
.formPage {
  display: flex;
}

.form {
  max-width: 600px;
}

.img {
  width: 100%;
  height: 50vh;
  max-width: 300px;
  max-height: 200px;
  background: no-repeat center / contain;
}

</style>
