<template>
  <div id="app">
    <h2 class="header">ToDoList</h2>
    <span>전체 : {{ allCount }}    </span>
    <span>완료 : {{ doneCount }}   </span>
    <span>진행 중 : {{ undoneCount }}</span>
    <todo-write></todo-write>
    <hr />
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import TodoWrite from './components/TodoWrite.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    TodoWrite,
    TodoList
  },
  computed: {
    allCount(){
      return this.$store.state.todos.length
    },
    // doneCount() {
    //   return this.$store.getters.doneTodoCount
    // },
    // undoneCount() {
    //   return this.$store.getters.undoneTodoCount
    // },
    ...mapGetters({
      doneCount: "doneTodoCount",
      undoneCount: "undoneTodoCount",
    }),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
    display: flex;
    justify-content: space-between; 
    height: 70px;
    background-color: black;
    line-height: 70px;
    padding: 0px 30px;
    color:white;
  }

  .btn {
    width: 8%;
    color: rgb(80, 82, 79);
    padding: 5px;
    margin: 10px 0;
    border: 1px solid #787878;
    border-radius: 4px;
    font-size: large;
    cursor: pointer;
  }
</style>
