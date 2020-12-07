import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface MenuState {
  pages: { title: string; route: string }[];
  logo: string;
}

@Module({ dynamic: true, store, name: 'menu' })
class Menu extends VuexModule implements MenuState {
  public pages: MenuState['pages'] = [
    {
      title: 'Главная',
      route: '/',
    },
    {
      title: 'Прогноз погоды',
      route: '/weather',
    },
    {
      title: 'ЧАВО',
      route: '/about',
    },
    {
      title: 'Подбор садового участка',
      route: '/choice',
    },
    {
      title: 'Продажа садовых участков',
      route: '/store',
    },
  ]

  logo = '/images/logo.png'
}

export const MenuModule = getModule(Menu);
