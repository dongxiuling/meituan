const moduleA = {
    namespaced:true,
    state: {
      count:1
    },
    mutations: {
      addMutation(state,num){
        state.count+= num;
      }
    },
    getters:{
      sum(state){
        return state.count*20+100;
      }
    },
    actions: {
      addAction({commit}){
        setTimeout(()=>{
          commit('addMutation',100)
        },1000)
      }
    }
}
export default moduleA;