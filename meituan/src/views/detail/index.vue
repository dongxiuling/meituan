<template>
  <div>
    <seller-header :seller="seller"></seller-header>
    <van-tabs v-model="active" sticky animated color="#ffda41">
      <van-tab title="点餐">
          <order></order>
      </van-tab>
      <van-tab title="评价">内容 2</van-tab>
      <van-tab title="商家">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getStoreById } from "@/api/detail.js";
import sellerHeader from "./seller-header";
import order from './order'
export default {
  data() {
    return {
      seller: [],
      active:0
    };
  },
  components: {
    sellerHeader,
    order
  },
  methods: {
    getStoreMsg() {
      // 请求id = this.$route.query.id
      getStoreById({ id: this.$route.query.id }).then(res => {
        // console.log(res);
        this.seller = res.data;
      });
    }
  },
  created() {
    this.getStoreMsg();
  }
};
</script>

<style lang="scss" scoped>
</style>