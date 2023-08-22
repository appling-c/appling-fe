// import shop from '../../api/shop'
// import nested from './nested'
import api from '@/plugins/api'
import userInfoInterface from '../../types/auth';

const state = () => ({
  userInfoInterface : {} as userInfoInterface
})

// getters
const getters = {
    userInfoInterface:(state) => {  // 유저정보 가져오기
      return state.userInfoInterface;
    },
}

// actions
const actions = {
  updateUserInfoInterface({state, commit}, userInfoInterface){
    commit('updateUserInfoInterface', userInfoInterface); // 유저정보 저장
  }, 
}

// mutations
const mutations = {
  updateUserInfoInterface(state, payload){
    state.userInfoInterface = payload;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}