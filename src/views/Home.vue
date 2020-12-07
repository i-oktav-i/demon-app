<template>
  <div class="home">
    <h1 class="title">Главная</h1>
    <h2 class="content">Сайт для тех, кто любит загородный отдых на даче</h2>
    <div class="main_content">
      <!-- eslint-disable-next-line -->
      <p class="main_text">Наш клуб для всех, кто любит ухаживать за садом, украшать свой дом и участок, а также отдыхать на природе. Здесь вы можете найти полезные статьи и советы, поделиться своими успехами и задать любой дачный вопрос.</p>
      <Splide
      class="slider"
      :options="{
        type: 'loop',
        width: '600px',
        height: '300px',
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
  padding-left: 20px;
  margin-bottom: 10px;
}

.content {
  text-align: left;
  padding-left: 20px;
  margin-bottom: 10px;
}

.main_content {
  padding-left: 20px;
  padding-right: 20px;
  text-align: justify;
  font-size: 20px;
}

.main_text {
  padding-bottom: 20px;
}

.slider {
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  flex: none;
}
</style>
