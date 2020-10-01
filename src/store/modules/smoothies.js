import FirebaseService from '@/services/FirebaseService.js'

export const namespaced = true

export const state = {
  smoothies: [],
  smoothie: {},
  deleteSmoothieId: null
}

export const mutations = {
  SET_SMOOTHIES(state, response) {
    state.smoothies = response
  },
  SET_SMOOTHIE(state, smoothie) {
    state.smoothies = smoothie
  },
  SET_DELETE_ID(state, id) {
    state.deleteSmoothieId = id
  }
}

export const actions = {
  fetchSmoothies({ commit }) {
    let smoothies = FirebaseService.getSmoothies()
    commit('SET_SMOOTHIES', smoothies)
  },
  deleteSmoothieById({ commit }, id) {
    try {
      FirebaseService.deleteSmoothieById(id)
      commit('SET_DELETE_ID', id)
    } catch (err) {
      console.log('Err', err)
    }
  }
}
export const getters = {
  getSmoothieById: state => id => {
    return state.smoothies.find(smoothie => smoothie.id === id)
  },
  refreshSmoothies: state => id => {
    return state.smoothies.filter(smoothie => smoothie.id != id)
  },
  getDeleteSmoothieId: state => {
    return state.deleteSmoothieId
  }
}
