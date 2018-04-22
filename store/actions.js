import { firebaseAction } from 'vuexfire';
import {DB} from '@/services/fireinit.js';

const actions = {
  setPriceRef: firebaseAction(({commit, bindFirebaseRef}, ref) => {
    bindFirebaseRef('products', DB.ref('/price'));
  })
}

export default  actions;