import {
  VuexModule, Module, Mutation, Action, getModule,
} from 'vuex-module-decorators';
import store from '@/store';

export interface AboutState {
  qna: {q: string; a: string}[];
}

@Module({ dynamic: true, store, name: 'about' })
class About extends VuexModule implements AboutState {
  public qna = [
    {
      q: 'qwertyuio',
      a: 'qwertyuhg456ytre456trf3ufnu gy3b wdhcbsdjchb y3bcjd cbsdc',
    },
    {
      q: 'qwertyuidvdfdfvo',
      a: 'qwertyuhg456ytre456trf3ufnu gy3b wdhcbsdjchb y3bcjd cbsdc',
    },
    {
      q: 'qwertvcscd gyuio',
      a: 'qwertyuhg456ytre456trf3ufnu gy3b wdhcbsdjchb y3bcjd cbsdc',
    },
  ]
}

export const AboutModule = getModule(About);
