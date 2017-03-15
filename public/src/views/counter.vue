<template>
    <div>
        <!--<header-component/>-->
        <div>counter : {{ msg }}</div>
        <!--<other-component/>-->
    </div>
</template>
<style>
</style>
<script>
    //    import HeaderComponent from './components/header.vue'
    //    import OtherComponent from './components/other.vue'
    export default{

        data(){
            return {
                msg: 'hehe vue'
            }
        },
        route: {
            data (transition){
                console.log(transition.to.params.id)

            }
        },
    }
</script>
