import { firebaseMutations } from 'vuexfire';

const mutations = {
  ...firebaseMutations,
  switchSale: state => {
        state.sale = !state.sale;
      },
  clearCartCount: state => {
        state.cartTotal = 0;
      },
  clearCartContents: state => {
        state.cart = {};
      },
  addItem: (state, item) => {
        state.cartTotal++;
        if (item.name in state.cart) {
          state.cart[item.name].count++;
        } else {
          let stateItem = Object.assign({}, item);
          stateItem.count = 1;
          state.cart[item.name] = stateItem;
        }
      }
}

export default mutations