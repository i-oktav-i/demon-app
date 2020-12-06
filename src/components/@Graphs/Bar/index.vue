<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import { Bar, mixins } from 'vue-chartjs';

import { GraphsModule } from '@/store/modules/graphs';

@Component({
  name: 'BarChart',
})
export default class BarChart extends Mixins(Bar, mixins.reactiveData, mixins.reactiveProp) {
  mounted() {
    this.renderChart(this.barData, {
      responsive: true,
    });
  }

  get barData() {
    return GraphsModule.barData;
  }
}
</script>
<style lang="scss" scoped >
</style>
