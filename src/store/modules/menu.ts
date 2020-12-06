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
      title: 'Графики',
      route: '/graphs',
    },
    {
      title: 'ЧАВО',
      route: '/about',
    },
    {
      title: 'Форма',
      route: '/form',
    },
    {
      title: 'Продажа садовых участков',
      route: '/store',
    },
  ]

  logo = 'https://yt3.ggpht.com/a/AATXAJx_ORV9RJbkswXpGTgkpFM3yGGrOg6MNT3-9A=s900-c-k-c0xffffffff-no-rj-mo'
}

export const MenuModule = getModule(Menu);
