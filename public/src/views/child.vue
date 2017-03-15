<template>
    <div>

        <input type="text" v-model='cmsg'>
        <!--<a v-link="{ name: 'counter',params:{id:'childId'} }">go /bar/bar</a>-->
        <!--&lt;!&ndash;router.go({ name: 'user', params: { userId: 123 }})&ndash;&gt;-->
        <!--<router-view></router-view>-->
    </div>
</template>
<style>

</style>
<script>
    export default{
        data(){
            return{
                cmsg:'c'
            }
        }
    }
</script>
