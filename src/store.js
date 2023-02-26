// Vuex Store
import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      count: 1,
    };
  },
});

// export const store = createStore({
//   state () {
//     items: {}
//   },
//   mutations: {
//     updateData(state, payload) {
//       state.items[payload.collection] = payload.items;
//     },
//   },
// });
