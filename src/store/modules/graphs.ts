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
        label: 'Количество солнечных дней',
        backgroundColor: '#1976D2',
        data: [20, 5, 27, 19, 17, 20, 22, 7, 28, 2, 11, 16],
      },
    ],
  }

  pieData: GraphsState['pieData'] = {
    datasets: [{
      data: [10, 20, 30, 15, 15],
      backgroundColor: [
        '#E91E63',
        '#3F51B5',
        '#00BCD4',
        '#4CAF50',
        '#FF9800',
      ],
    }],
    labels: [
      '-10 .. 0',
      '0 .. +10',
      '+10 .. +20',
      '+20 .. +30',
      '+30 .. +40',
    ],
  }
}

export const GraphsModule = getModule(Graphs);
