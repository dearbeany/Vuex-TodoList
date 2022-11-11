import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    todos: [],
  },
  getters: {
    // doneTodoCount(state){
    //   let cnt = 0;
    //   for(let i = 0; i<state.todos.length; i++){
    //     if(state.todos[i].done){
    //       cnt++;
    //     }
    //   }
    //   return cnt;
    // }
    doneTodoCount(state){
      return state.todos.filter(todo => todo.done ).length;
    },
    undoneTodoCount(state){
      return state.todos.filter(todo => !todo.done ).length;
    }
  },
  mutations: {
    CREATE_TODO(state, todoItem){
      state.todos.push(todoItem)
    },
    UPDATE_TODO(state, todoItem){
      const index = state.todos.indexOf(todoItem);
      state.todos[index].done = !state.todos[index].done;
    },
    DELETE_TODO(state, todoItem){
      const index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    }
  },
  actions: {
    createTodo({ commit }, payload){
      commit('CREATE_TODO', payload); // mutations이름은 상수형으로 (메소드와 구분되도록)
    },
    updateTodo({ commit }, payload){
      commit('UPDATE_TODO', payload);
    },
    deleteTodo({ commit }, payload){
      if(confirm("삭제하시겠습니까?")){
        commit('DELETE_TODO', payload)
      }
    }
  },
  modules: {
  }
})
