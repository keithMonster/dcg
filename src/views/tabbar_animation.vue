<template>
  <section class="tabbar_wrap" flex="">
    <div
      class="tabbar_item"
      v-for="(item, index) in tabbar"
      flex-box="1"
      @click="handleTabbarChange(index)"
    >
      <svg width="200px" height="100px">
        <path
          :d="activeTabbar === index ? pathAttr.fin : pathAttr.begin"
          stroke="black"
          fill="transparent"
        >
          <animate
            :id="`path_a${index}`"
            attributeName="d"
            :from="pathAttr.begin"
            :to="pathAttr.to"
            begin="indefinite"
            dur=".2s"
          />
          <animate
            attributeName="d"
            :from="pathAttr.to"
            :to="pathAttr.fin"
            :begin="`path_a${index}.end`"
            dur=".3s"
          />
        </path>
      </svg>
      <span>{{ item }}</span>
    </div>
  </section>
</template>
<style lang="less" rel="stylesheet/less" scoped>
.tabbar_item {
  position: relative;
  text-align: center;
  > svg {
    position: absolute;
    bottom: 100%;
    left: 0;
  }
}
// path {
//   transition: all 0.3s ease-out;
// }
.tabbar_wrap {
  width: 400px;
  height: 100px;
  margin: 200px auto;
}
</style>
<script type="text/ecmascript-6">
export default{
    created(){
    },
    data(){
        return {
            tabbar:['嘿','哈'],
            activeTabbar:0,
            pathAttr:{
                begin:'M0 80 L20 80 Q40 80 50 80 Q 100 80 150 80 Q 160 80 180 80 L200 80',
                to:   'M0 80 L20 80 Q40 80 50 60 Q 100 -20 150 60 Q 160 80 180 80 L200 80',
                fin:  'M0 80 L20 80 Q40 80 50 80 Q 100 10 150 80 Q 160 80 180 80 L200 80'
            }
        }
    },
    methods: {
        handleTabbarChange(index){
            this.activeTabbar = index
            document.querySelector(`#path_a${index}`).beginElement();
        }
    },
}
</script>
