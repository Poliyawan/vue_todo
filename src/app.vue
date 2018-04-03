<template>
  <div id="app">
       <div id="cover">
        <Header></Header>
           <Todo></Todo>
           <Footer></Footer>
       </div>
  </div>
</template>

<script>
    import Header from './todo/header.vue'
    import Footer from  './todo/footer.jsx'
    import Todo from './todo/todo.vue'

    export default {
        components:{
            Header,
            Footer,
            Todo
        }
    }
</script>

<style lang="scss" scoped>
    #app{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -99;

    }
    #cover{
        position:absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #999;
        opacity: 0.9;
        z-index: -99;
    }
</style>