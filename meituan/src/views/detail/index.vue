<template>
  <div class="scrollBox">
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
    <cart :seller="seller"></cart>
  </div>
</template>

<script>
import { getStoreById } from "@/api/detail.js";
import sellerHeader from "./seller-header";
import order from "./order";
import BScroll from 'better-scroll'
import cart from './cart'
export default {
  data() {
    return {
      seller: [],
      active: 0,
      scrollBox:null
    };
  },
  components: {
    sellerHeader,
    order,
    cart
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
  mounted(){
    this.scrollBox = new BScroll('.scrollBox',{
      bounce:false
    })
  },
  created() {
    this.getStoreMsg();
  }
};
</script>

<style lang="scss" scoped>
.scrollBox{
  height:100vh;
}
</style>