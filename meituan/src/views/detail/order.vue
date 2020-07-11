<template>
  <div>
    <div class="order-box">
      <div class="menu-box">
        <ul>
          <li class="menu-list active">caidan</li>
          <li class="menu-list">当季推荐 当季推荐</li>
          <li class="menu-list">当季推荐</li>
        </ul>
      </div>
      <div class="prod-box">
        <ul>
          <li class="cate-list">
            <div class="cate-title">当季推荐</div>
            <ul>
              <li class="prod-list">
                  <div class="prod-img-box">
                      <img src="http://admin.gxxmglzx.com/tender/upload/test/goods7.png" alt="">
                  </div>
                  <div class="prod-info">
                      <div class="name">北海道云朵吐司</div>
                      <div class="sale"><span class="num">00月销</span><span>赞 33</span></div>
                      <div class="price">￥100</div>
                  </div>
              </li>
              <li class="prod-list">
                  <div class="prod-img-box">
                      <img src="http://admin.gxxmglzx.com/tender/upload/test/goods7.png" alt="">
                  </div>
                  <div class="prod-info">
                      <div class="name">北海道云朵吐司</div>
                      <div class="sale"><span class="num">00月销</span><span>赞 33</span></div>
                      <div class="price">￥100</div>
                  </div>
              </li>
            </ul>
          </li>
           <li class="cate-list">
            <div class="cate-title">当季推荐</div>
            <ul>
              <li class="prod-list">
                  <div class="prod-img-box">
                      <img src="http://admin.gxxmglzx.com/tender/upload/test/goods7.png" alt="">
                  </div>
                  <div class="prod-info">
                      <div class="name">北海道云朵吐司</div>
                      <div class="sale"><span class="num">00月销</span><span>赞 33</span></div>
                      <div class="price">￥100</div>
                  </div>
              </li>
              <li class="prod-list">
                  <div class="prod-img-box">
                      <img src="http://admin.gxxmglzx.com/tender/upload/test/goods7.png" alt="">
                  </div>
                  <div class="prod-info">
                      <div class="name">北海道云朵吐司</div>
                      <div class="sale"><span class="num">00月销</span><span>赞 33</span></div>
                      <div class="price">￥100</div>
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
export default {};
</script>

<style lang="scss" scoped>
.order-box {
  display: flex;
  .menu-box {
    width: 1.6rem;
    flex: 0 0 1.6rem;
    background: #f5f5f5;
    height: calc(100vh - 94px);
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
    .cate-list{
        padding:0 0.2rem;
        .cate-title{
            height:0.72rem;
            line-height: 0.72rem;
        }
        .prod-list{
            display: flex;
            margin-bottom: 0.4rem;
            .prod-img-box{
                width:1.5rem;
                flex:0 0 1.5rem;
                margin-right: 0.15rem;
                img{
                    width:100%;
                }
            }
            .prod-info{
                flex:1;
                .name{
                    font-size: 0.32rem;
                    color:#333;
                    font-weight: bold;
                    line-height: 0.45rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin-bottom: 0.04rem;
                }
                .sale{
                    color:#666;
                    font-size: 11px;
                    margin-bottom: 0.06rem;
                    .num{
                        margin-right: 0.2rem;
                    }
                }
                .price{
                    color: #fb4e44;
                    font-size: 0.36rem;
                }
            }
        }
    }
  }
}
</style>