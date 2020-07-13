<template>
  <div class="cart-container">
    <div class="cart-box">
      <div class="cart-icon" :class="{'active':total}">
        <span class="iconfont icon-gouwuche1"></span>
        <span class="num" v-show="total">{{total}}</span>
      </div>
      <div class="cart-price" :class="{'active':total}">
        <div class="price">￥{{totalPrice}}</div>
        <div class="deliver">另需配送费￥{{seller.fee}}</div>
      </div>
      <div class="cart-buy" :class="{'active':totalPrice>seller.price}">{{buyDesc}}</div>
    </div>
    <div class="ball-box">
      <div v-for="(ball,index) in ballList" :key="index">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div class="ball" v-show="ball.show">
            <div class="inner"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("product", ["totalPrice", "total"]),
    ...mapState("ball", ["ballList"]),
    buyDesc() {
      if (this.totalPrice == 0) {
        return `￥${this.seller.price}元起送`;
      } else if (this.totalPrice < this.seller.price) {
        return `还差￥${this.seller.price - this.totalPrice}元起送`;
      } else {
        return "去结算";
      }
    }
  },
  props: ["seller"],
  methods: {
    beforeEnter(el) {
      for (let i = 0; i < this.ballList.length; i++) {
        let ball = this.ballList[i];
        if (ball.show) {
          let pos = ball.el.getBoundingClientRect();
          let y = window.innerHeight - pos.top - 23;
          let x = pos.left - 30;
          el.display = "";
          el.style.transform = `translate3d(0,${-y}px,0)`;
          let inner = el.getElementsByClassName("inner")[0];
          inner.style.transform = `translate3d(${x}px,0,0)`;
        }
      }
    },
    enter(el,done) {
      el.offsetWidth;
      this.$nextTick(()=>{
         el.style.transform = `translate3d(0,0,0)`;
          let inner = el.getElementsByClassName("inner")[0];
          inner.style.transform = `translate3d(0,0,0)`;
          el.addEventListener('transitionend',done)
      })
    },
    afterEnter(el) {
      el.style.display = "none";
      // 释放小球
      this.$store.commit('ball/removeBall')
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-container {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  background: #3b3b3c;
  width: 100%;
  .cart-box {
    display: flex;
    .cart-icon {
      width: 50px;
      height: 50px;
      position: absolute;
      left: 10px;
      top: -10px;
      background: #656565;
      border-radius: 50%;
      text-align: center;
      line-height: 50px;
      .num {
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #fb4e44;
        color: #fff;
        border-radius: 50%;
        transform: scale(0.5) translate(50%, -50%);
      }
      .icon-gouwuche1 {
        font-size: 28px;
        color: #c4c4c4;
      }
      &.active {
        background: #f8c74e;
        .icon-gouwuche1 {
          color: #333;
        }
      }
    }
    .cart-price {
      padding-left: 70px;
      flex: 1;
      color: #999;
      .price {
        display: none;
      }
      .deliver {
        line-height: 50px;
        font-size: 14px;
      }
      &.active {
        .price {
          display: block;
          font-size: 24px;
          color: #fff;
          line-height: 33px;
        }
        .deliver {
          font-size: 11px;
          line-height: 16px;
        }
      }
    }
    .cart-buy {
      width: 108px;
      color: #999;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      line-height: 50px;
      &.active {
        background: #f8c74e;
        font-size: 18px;
        color: #333;
        font-weight: normal;
      }
    }
  }
  .ball {
    position: fixed;
    left: 30px;
    bottom: 23px;
    transition: all 0.4s cubic-bezier(0.48, -0.28, 0.73, 0.42);
    .inner {
      width: 16px;
      height: 16px;
      background: #00a0dc;
      border-radius: 50%;
      transition: all 0.4s linear;
    }
  }
}
</style>