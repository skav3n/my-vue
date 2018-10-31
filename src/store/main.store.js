import { MainService } from '../services/main.service';

const name = 'MainModuleStore';

export default {
  name,
  namespaced: true,
  
  state() {
    return {
      contractors: [],
    };
  },

  actions: {
    getContractors({ commit }) {
      return MainService.getContractors()
        .then((response) => {
          commit('setContractors', response);
          return response;
        });
    },
    saveContractor({ commit, dispatch }, payload) {
      return MainService.saveContractor(payload)
        .then((response) => {
          dispatch('getContractors');
        })
    },
    removeContractor({ commit, dispatch }, payload) {
      MainService.removeContractor(payload)
        .then((response) => {
          dispatch('getContractors');
        })
    },
  },

  getters: {},

  mutations: {
    setNewContractor(state, payload) {
      state.contractors.push(payload);
    },
    setContractors(state, payload) {
      state.contractors = payload;
    },
    removeContractor(state, key) {
      for(let i = 0; i < state.contractors.length; i++) {
        if (state.contractors[i].key === key) {
          state.contractors.splice(i, 1);
          break;
        }
      }
    },
  },
};
