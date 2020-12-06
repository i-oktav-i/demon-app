import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface HomeState {
  sliderImages: string[];
}

@Module({ dynamic: true, store, name: 'home' })
class Home extends VuexModule implements HomeState {
  public sliderImages = [
    'https://s1.1zoom.ru/b5050/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_1920x1200.jpg',
    'https://avatanplus.com/files/effects/original/583eb65914425158b4f84bfb.jpg',
  ]
}

export const HomeModule = getModule(Home);
