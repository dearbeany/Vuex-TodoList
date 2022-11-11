<template>
  <div>
    <h3>할 일 작성</h3>
    <input class="view" type="text" v-model.trim="newTodo" ref="todoInput" @keyup.13="createTodo"/>
    <button class="btn" @click="createTodo">등록</button>
  </div>
</template>

<script>
export default {
    name: 'TodoWrite',
    data() {
        return {
            newTodo: '',
        };
    },
    methods: {
        createTodo(){
            const todoItem = {
                work: this.newTodo,
                done: false
            }
            // 유효성 검사 (할 일 아무 것도 적지 않았을 때)
            if(this.newTodo){ // 있으면
                console.log(todoItem);
                this.$store.dispatch("createTodo", todoItem);
                this.newTodo =''; // v-model로 양방향통신했으니깐 비워주자
            
            } else { // 안 적었으면 
                alert("내용을 입력하세요!");
                this.$refs.todoInput.focus();
            }
        }
    }
}
</script>

<style>
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