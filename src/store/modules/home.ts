import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface HomeState {
  sliderImages: string[];
}

@Module({ dynamic: true, store, name: 'home' })
class Home extends VuexModule implements HomeState {
  private IMAGES_ROOT = '/images';

  public sliderImages = [
    `${this.IMAGES_ROOT}/house01.png`,
    `${this.IMAGES_ROOT}/house02.png`,
    `${this.IMAGES_ROOT}/house03.png`,
    `${this.IMAGES_ROOT}/house04.png`,
  ]
}

export const HomeModule = getModule(Home);
