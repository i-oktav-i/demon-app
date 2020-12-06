import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';
import store from '@/store';
import { ChartData } from 'chart.js';

export interface GraphsState {
  barData: ChartData;
  pieData: ChartData;
}

@Module({ dynamic: true, store, name: 'graphs' })
class Graphs extends VuexModule implements GraphsState {
  barData: GraphsState['barData'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 10, 40, 20, 12, 11],
      },
    ],
  }

  pieData: GraphsState['pieData'] = {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        '#f00',
        '#0f0',
        '#00f',
      ],
    }],
    labels: [
      'Red',
      'Yellow',
      'Blue',
    ],
  }
}

export const GraphsModule = getModule(Graphs);
