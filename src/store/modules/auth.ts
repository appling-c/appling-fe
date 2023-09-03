// import shop from '../../api/shop'
// import nested from './nested'
import api from '@/plugins/api'
import userInfoInterface from '../../types/auth';
import Token from '../../types/auth'
const state = () => ({
  userInfoInterface : {} as userInfoInterface, 
  userToken : {} as Token
})

// getters
const getters = {
    userInfoInterface:(state) => {  // 유저정보 가져오기
      return state.userInfoInterface;
    },
    userToken:(state) => {  // 사용자 토큰
      return state.userToken;
    },
}

// actions
const actions = {
  updateUserInfoInterface({state, commit}, userInfoInterface:userInfoInterface){
    commit('updateUserInfoInterface', userInfoInterface); // 유저정보 저장
  }, 

  saveUserToken({state, commit}, token:Token){
    commit('saveUserToken', token); // 사용자 토큰
  }, 
}

// mutations
const mutations = {
  updateUserInfoInterface(state, payload){
    state.userInfoInterface = payload;
  },
  saveUserToken(state, payload){
    state.userToken = payload;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}