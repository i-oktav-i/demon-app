<template>
  <div class="formPage">
    <div class="form">
      <p class="text_usage">
        Генератор садового участка. Введите требуемые данные и нажмите "подобрать".
      </p>
      <el-input
        placeholder="Площадь участка (в квадратных метрах)"
        v-model="input1"
        class="input_field"
      />
      <el-input
        placeholder="Количество парковочных мест"
        v-model="input2"
        class="input_field"
      />
      <el-select v-model="select1Value" placeholder="Тип домика">
        <el-option
          v-for="item in select1"
          :key="item"
          :label="item"
          :value="item"
          class="select_field">
        </el-option>
      </el-select>
      <el-button
        v-loading="isLoading"
        @click="onClick"
        class="generate_button"
      >
        Подобрать
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

  select1 = [
    'Для огорода',
    'Для отдыха',
    'Для проживания',
  ]

  select1Value = this.select1[0]

  isLoading: boolean | null = null

  async onClick() {
    this.isLoading = true;

    await new Promise<void>((resolve) => setTimeout(() => resolve(), 1000));

    this.isLoading = false;
  }

  images = [
    'images/garden1.jpg',
    'images/garden2.jpg',
    'images/garden3.jpg',
    'images/garden4.jpg',
    'images/garden5.jpg',
    'images/garden6.jpg',
    'images/garden7.jpg',
    'images/garden8.jpg',
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
  justify-content: center;
}

.form {
  max-width: 400px;
  margin-left: 20px;
}

.img {
  width: 100%;
  height: 50vh;
  max-width: 600px;
  max-height: 600px;
  background: no-repeat center / contain;
}

.input_field {
  margin-bottom: 10px;
}

.select_field {
  margin-right: 20px;
}

.generate_button {
  margin-left: 20px;
}

.text_usage {
  text-align: center;
  margin-bottom: 20px;
  font-size: 15px;
  color: blue;
}

</style>
