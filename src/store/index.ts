import Vue from 'vue';
import Vuex from 'vuex';

import { HomeState } from './modules/home';
import { MenuState } from './modules/menu';

Vue.use(Vuex);

interface State {
  home: HomeState;
  menu: MenuState;
}

export default new Vuex.Store<State>({});
