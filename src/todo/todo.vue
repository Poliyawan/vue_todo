<template>
    <section class="real-app">
        <input type="text" class="add-input" autofocus="autofocus" placeholder="接下来做什么？" @keyup.enter="addTodo">
        <item :todo="todo1"
              v-for="todo1 in todos"
              :key= "todo1.id"
        />
        <tabs :filter="filter"></tabs>
    </section>
</template>

<script>

    import item from './items.vue'
    import tabs from './tabs.vue'

    let id = 0;
    export default {
        name: "todo",
        data(){
          return{
              todos:[],
              filter:'all'
          }
        },
        components:{
            item,
            tabs
        },
        methods:{
            addTodo(e){
                this.todos.unshift({
                   id : id++,
                    content:e.target.value.trim(),
                    completed:false

                })
                e.target.value=''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .real-app{
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666;
    }

    .add-input{
        position: relative;
        z-index: 999;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 60px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
    }
</style>