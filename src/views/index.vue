<template>
  <div>
    <div v-if="loadObj < 1" class="loading" :style="{transform:`scale(${loadObj},1)`}"></div>
    <div id="world"></div>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
#world {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  // background: linear-gradient(#e4e0ba, #f7d9aa);
  background: #000;
  display: flex;
}
.loading {
  width: 100%;
  height: 5px;
  background: #fdfd8f;
  position: fixed;
  top: 0;
  left: 0;
  z-index:2;
  transform-origin: left;
}
</style>
<script type="text/ecmascript-6">
import * as THREE from "three";
import aviatorInit from "../assets/three_charts/aviator2";
import bus from "@/bus.js";
export default {
  mounted() {
    this.init();
    bus.$on("object_load", this.handleLoad);
  },
  data() {
    return {
      loadObj: 0
    };
  },
  methods: {
    init() {
      this.initChart();
    },
    initChart() {
      aviatorInit(THREE);
    },
    handleLoad(num) {
      this.loadObj = num;
    }
  },
  computed: {},
  components: {},
  props: []
};
</script>
