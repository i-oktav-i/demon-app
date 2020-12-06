import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface StoreState {
  items: {
    img: string;
    price: number;
    text: string;
    square: number;
  }[];
}

@Module({ dynamic: true, store, name: 'store' })
class Store extends VuexModule implements StoreState {
  public items: StoreState['items'] = [
    {
      img: 'https://yt3.ggpht.com/a/AATXAJx_ORV9RJbkswXpGTgkpFM3yGGrOg6MNT3-9A=s900-c-k-c0xffffffff-no-rj-mo',
      price: 1234,
      text: '2fervbjdcn',
      square: 123,
    },
    {
      img: 'https://yt3.ggpht.com/a/AATXAJx_ORV9RJbkswXpGTgkpFM3yGGrOg6MNT3-9A=s900-c-k-c0xffffffff-no-rj-mo',
      price: 1234,
      text: '2fervbjdcn',
      square: 123,
    },
    {
      img: 'https://yt3.ggpht.com/a/AATXAJx_ORV9RJbkswXpGTgkpFM3yGGrOg6MNT3-9A=s900-c-k-c0xffffffff-no-rj-mo',
      price: 1234,
      text: '2fervbjdcn',
      square: 123,
    },
    {
      img: 'https://yt3.ggpht.com/a/AATXAJx_ORV9RJbkswXpGTgkpFM3yGGrOg6MNT3-9A=s900-c-k-c0xffffffff-no-rj-mo',
      price: 1234,
      text: '2fervbjdcn',
      square: 123,
    },
    {
      img: 'https://yt3.ggpht.com/a/AATXAJx_ORV9RJbkswXpGTgkpFM3yGGrOg6MNT3-9A=s900-c-k-c0xffffffff-no-rj-mo',
      price: 1234,
      text: '2fervbjdcn',
      square: 123,
    },
  ]
}

export const StoreModule = getModule(Store);
