<template>
  <div class="form">
    <el-input
      placeholder="Введите что-то"
      v-model="input1"
    />
    <el-input
      placeholder="Введите что-то"
      v-model="input2"
    />
    <el-input
      placeholder="Введите что-то"
      v-model="input3"
    />

    <p>{{ result }}</p>
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

  get result() {
    return (this.input1 || 0) * (this.input2 || 0) + (this.input3 || 0);
  }
}
</script>

<style lang="scss" scoped>
.form {
  max-width: 600px;
}
</style>
