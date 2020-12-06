<template>
  <div class="about">
    <h1 class="title">Часто задаваеые вопросы</h1>
    <div class="qnaWrapper">
      <el-collapse v-model="activeName">
        <el-collapse-item
          v-for="{q, a} in qna"
          :title="q"
          :key="q"
          :name="q"
          class="qna"
        >
          <p class=qnaP>{{ a }}</p>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { AboutModule } from '@/store/modules/about';

@Component({
  name: 'AboutPage',
})
export default class Menu extends Vue {
  get qna() {
    return AboutModule.qna;
  }

  activeName = []
}
</script>

<style lang="scss" scoped>
.about {
  .title {
    text-align: left;
    margin-left: 30px;
  }

  .qna {
    max-width: 600px;
    margin: auto;

    &P {
      padding-left: 50px;
      text-align: left;
    }

    &Wrapper {
      max-width: 600px;
      padding: 30px;
    }
  }
}
</style>
