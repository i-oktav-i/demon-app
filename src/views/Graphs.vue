<template>
  <div class="graphsPage">
    <h1 class="title">Графики</h1>
    <div class="graphsWrapper">
      <Bar class="gr" />
      <Pie class="gr" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Bar from '@/components/@Graphs/Bar/index.vue';
import Pie from '@/components/@Graphs/Pie/index.vue';

@Component({
  name: 'GraphsPage',
  components: { Bar, Pie },
})
export default class Menu extends Vue {
}
</script>

<style lang="scss" scoped >
.graphsPage {
  .title {
    text-align: left;
    padding-left: 40px;
    margin-bottom: 30px;
  }

  .graphsWrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .gr {
    width: 400px;

    @media screen and (max-width: 400px) {
      width: 300px;
    }
  }
}
</style>
