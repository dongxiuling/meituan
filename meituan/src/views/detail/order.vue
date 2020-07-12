<template>
  <div>
    <div class="order-box">
      <div class="menu-box" ref="menuBox">
        <ul>
          <li
            v-for="(item,index) in productList"
            :key="index"
            class="menu-list"
            :class="{'active':currentIndex == index}"
            @click="changeMenu(index)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="prod-box" ref="proBox">
        <ul>
          <li class="cate-list" v-for="(item,index) in productList" :key="index">
            <div class="cate-title">{{item.name}}</div>
            <ul>
              <li class="prod-list" v-for="prod in item.content" :key="prod.id">
                <div class="prod-img-box">
                  <img :src="prod.img" alt />
                </div>
                <div class="prod-info">
                  <div class="name">{{prod.name}}</div>
                  <div class="sale">
                    <span class="num">月销{{prod.num}}</span>
                    <span>赞{{prod.up}}</span>
                  </div>
                  <div class="price">￥{{prod.price}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      menuScroll: null,
      prodScroll: null,
      menuList:[],
      currentIndex:0,
      posY:[],
      scrollY:0
    };
  },
  methods: {
    initScroll() {
      this.menuScroll = new BScroll(".menu-box", {
        bounce: false,
        click: true
      });
      this.prodScroll = new BScroll(".prod-box", {
        bounce: false,
        probeType:3
      });
      // 获取右侧每个分类的垂直方向位置
      this.getPosY();
      // 获取左侧li列表
      this.menuList = this.$refs.menuBox.getElementsByClassName('menu-list')
      this.prodScroll.on("scroll",e=>{
        this.scrollY = Math.abs(Math.round(e.y));
      })
    },
    changeMenu(index) {
      let prodList = this.$refs.proBox.getElementsByClassName("cate-list");
      let el = prodList[index];
      this.prodScroll.scrollToElement(el, 300);
      this.currentIndex = index;
    },
    getPosY(){
      let prodList = this.$refs.proBox.getElementsByClassName("cate-list");
      let y = 0;
      for(let i=0; i<prodList.length; i++){
        if(i==0){
          this.posY.push(y);
        }else{
          let prevEle = prodList[i-1];
          y += prevEle.offsetHeight;
          this.posY.push(y);
        }
      }
    }
  },
  computed: {
    ...mapState("product", ["productList"])
  },
  created() {
    this.$store
      .dispatch("product/getProdList", this.$route.query.id)
      .then(() => {
        // 初始化 betterScroll
        this.$nextTick(() => {
          this.initScroll();
        });
      });
  },
  watch:{
    scrollY(val){
      for(let i=0; i<this.posY.length; i++){
        let pos1 = this.posY[i];
        let pos2 = this.posY[i+1];
        if(pos1 <= val && pos2 > val){  //i索引
          let el = this.menuList[i];
          this.menuScroll.scrollToElement(el,300,0,-100);
          this.currentIndex = i;
          break;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.order-box {
  display: flex;
  height: calc(100vh - 44px);
  overflow: hidden;
  .menu-box {
    width: 1.6rem;
    flex: 0 0 1.6rem;
    background: #f5f5f5;
    height: calc(100vh - 94px);
    overflow: hidden;
    .menu-list {
      color: #2c3e50;
      font-size: 0.26rem;
      padding: 0.18rem 0.24rem 0.44rem;
      line-height: 0.36rem;
      &.active {
        color: #f00;
      }
    }
  }
  .prod-box {
    flex: 1;
    min-width: 0;
    background: #fff;
    height: calc(100vh - 94px);
    overflow: hidden;
    .cate-list {
      padding: 0 0.2rem;
      overflow: hidden;
      .cate-title {
        height: 0.72rem;
        line-height: 0.72rem;
      }
      .prod-list {
        display: flex;
        margin-bottom: 0.4rem;
        .prod-img-box {
          width: 1.5rem;
          flex: 0 0 1.5rem;
          margin-right: 0.15rem;
          img {
            width: 100%;
          }
        }
        .prod-info {
          flex: 1;
          .name {
            font-size: 0.32rem;
            color: #333;
            font-weight: bold;
            line-height: 0.45rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 0.04rem;
          }
          .sale {
            color: #666;
            font-size: 11px;
            margin-bottom: 0.06rem;
            .num {
              margin-right: 0.2rem;
            }
          }
          .price {
            color: #fb4e44;
            font-size: 0.36rem;
          }
        }
      }
    }
  }
}
</style>