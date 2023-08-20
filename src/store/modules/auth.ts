// import shop from '../../api/shop'
// import nested from './nested'
import api from '@/plugins/api'
const state = () => ({
  
  userInfoInterface : {
        created_at: String, 
        email : String, 
        member_id : String,   
        modified_at : Number, 
        name : Number, 
        nickname : String,
        role : String, 
        status : String, 
    }
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