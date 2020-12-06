<template>
  <div class="home">
    <h1 class="title">Главная</h1>
    <Splide
      class="slider"
      :options="{
        type: 'loop',
        width: '50vw',
        height: '40vh',
        cover: true
      }"
    >
      <SplideSlide
        v-for="src in images"
        :key="src"
      >
        <img :src="src" alt="">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator';

import { HomeModule } from '@/store/modules/home';

@Component({
  name: 'HomePage',
})
export default class HelloWorld extends Vue {
  // eslint-disable-next-line class-methods-use-this
  get images() {
    return HomeModule.sliderImages;
  }
}
</script>
<style lang="scss" scoped >
@import '~@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

.title {
  text-align: left;
  padding-left: 40px;
  margin-bottom: 30px;
}

.slider {
  margin: auto;
}
</style>
