<template>
  <div class="card_contain">
    <div v-for="(item,index) in list" class="card_item">

    </div>
  </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>

</style>
<script type="text/ecmascript-6">
export default {
  created() {
    this.init();
  },
  data() {
    return {
      list:[]
    };
  },
  methods: {
    init() {
    },
  },
};
</script>

