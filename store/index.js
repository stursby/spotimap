import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      name: 'Charlie'
    }
  })
}

export default createStore
