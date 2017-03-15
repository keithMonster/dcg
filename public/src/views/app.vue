<template>
    <div>
        <!--index : {{ indexMsg }}-->
        <!-- 默认为单向绑定 -->
        <!--<counter :msg="indexMsg"></counter>-->
        <!--<child :msg="parentMsg"></child>-->
        <!-- 双向绑定 -->
        <!--<child msg2='click' :msg.sync="indexMsg"></child>-->
        <!-- 单次绑定 -->
        <!--<child :msg.once="parentMsg"></child>-->
        hi! keke
    </div>
</template>
<style lang="less">

</style>
<script>
    export default{
        created(){

        },
        data(){
            return {
                indexMsg: 'from index msg',

            }
        },
        events: {
            'child-msg'(msg) {
                // 事件回调内的 `this` 自动绑定到注册它的实例上
                this.indexMsg = msg;
            }
        },
        components: {
            'counter': require('./counter.vue'),
            'child': require('./child.vue')
        }
    }
</script>
