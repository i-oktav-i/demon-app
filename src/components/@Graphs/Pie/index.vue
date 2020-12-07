<script lang="ts">
import { Component, Mixins, Prop } from 'vue-property-decorator';
import { Pie, mixins } from 'vue-chartjs';

import { GraphsModule } from '@/store/modules/graphs';

@Component({
  name: 'PieChart',
})
export default class BarChart extends Mixins(Pie, mixins.reactiveData, mixins.reactiveProp) {
  mounted() {
    this.renderChart(this.pieData, {
      responsive: true,
      title: {
        display: true,
        text: 'Среднегодовая температура, ℃',
      },
    });
  }

  get pieData() {
    return GraphsModule.pieData;
  }
}
</script>
<style lang="scss" scoped >
</style>
