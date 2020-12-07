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
  private IMAGES_ROOT = '/images';

  public items: StoreState['items'] = [
    {
      img: `${this.IMAGES_ROOT}/sell01.jpg`,
      price: 1000000,
      text: 'Домик в деревне',
      square: 150,
    },
    {
      img: `${this.IMAGES_ROOT}/sell02.jpg`,
      price: 1000000,
      text: 'Домик в деревне',
      square: 150,
    },
    {
      img: `${this.IMAGES_ROOT}/sell03.jpg`,
      price: 1000000,
      text: 'Домик в деревне',
      square: 150,
    },
    {
      img: `${this.IMAGES_ROOT}/sell04.jpg`,
      price: 1000000,
      text: 'Домик в деревне',
      square: 150,
    },
    {
      img: `${this.IMAGES_ROOT}/sell05.jpg`,
      price: 1000000,
      text: 'Домик в деревне',
      square: 150,
    },
    {
      img: `${this.IMAGES_ROOT}/sell06.jpg`,
      price: 1000000,
      text: 'Домик в деревне',
      square: 150,
    },
    {
      img: `${this.IMAGES_ROOT}/sell07.jpg`,
      price: 1000000,
      text: 'Домик в деревне',
      square: 150,
    },
    {
      img: `${this.IMAGES_ROOT}/sell08.jpg`,
      price: 1000000,
      text: 'Домик в деревне',
      square: 150,
    },
    {
      img: `${this.IMAGES_ROOT}/sell09.jpg`,
      price: 1000000,
      text: 'Домик в деревне',
      square: 150,
    },
  ]
}

export const StoreModule = getModule(Store);
