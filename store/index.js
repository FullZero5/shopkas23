import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';


const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: {},
      sale: false,
      products: [],
    },
    getters: {
      women: state => filter(state.products, 'category', 'women'),
      men: state => filter(state.products, 'category', 'men'),
      sale: state => filter(state.products, 'sale', true)
    },
    mutations,
    actions
  });
};

export default createStore;

//helper
const filter = (array, key, value) => array.filter(item => item[key] === value);

const getMin = (array,key) => {
  return array.reduce((min, p) => p[key] < min ? p[key] : min, array[0][key]);
};

const getMax = (array,key)=> {
  return array.reduce((max, p) => p[key] > max ? p[key] : max, array[0][key]);
};
