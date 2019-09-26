<template>
    <div id="world"></div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    #world {
        position: absolute;
        top:0;
        bottom:0;
        width:100%;
        overflow: hidden;
        background: linear-gradient(#e4e0ba, #f7d9aa);
        display:flex;
    }
</style>
<script type="text/ecmascript-6">
   import * as THREE from 'three';
   import aviatorInit from '../assets/three_charts/aviator'
    export default {
        mounted() {
            this.init()
        },
        data() {
            return {}
        },
        methods: {
            init() {
               this.initChart()
            },
            initChart() {
               aviatorInit(THREE)
            }
        },
        computed: {},
        components: {},
        props: []
    }
</script>
