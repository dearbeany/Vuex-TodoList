<template>
  <div>
    <span class="click view" :class="{'is-done': todoItem.done}" @click="updateTodo(todoItem)"> {{ todoItem.work }}</span>
    <button class="btn" @click="deleteTodo(todoItem)">삭제</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'TodoListItem',
    props: {
        todoItem: Object
    },
    methods:{
        // updateTodo(){
        //     this.$store.dispatch('updateTodo', this.todoItem);
        // },
        // deleteTodo(){
        //     this.$store.dispatch('deleteTodo', this.todoItem)
        // },
        ...mapActions([
            'deleteTodo', 'updateTodo'
        ])
    }
}
</script>

<style scoped>
    .is-done{
        text-decoration: line-through;
        color:red;
    }

    .click{
        cursor: pointer;
    }
    .view {
        width: 80%;
        padding: 7px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: medium;
     }
</style>