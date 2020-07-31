<template>
    <div class="seller-box">
        <ul class="list-box">
            <li class="list">
                <span class="iconfont icon-position"></span>
                <span>{{seller.address}}</span>
            </li>
        </ul>
        <ul class="list-box">
            <li class="list">
                <span class="iconfont icon-Icon"></span>
                <span>配送服务：{{seller.server}}</span>
            </li>
            <li class="list">
                <span class="iconfont icon-shijian"></span>
                <span>配送时间：{{seller.delivery_time}}</span>
            </li>
        </ul>
        <ul class="list-box">
            <li class="list">
                <span class="iconfont icon-jian2"></span>
                <span>{{seller.full}}</span>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        props:["seller"]
    }
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
.seller-box{
    padding:0 0.3rem;
    .list-box{
        @include border-bottom-1px(#ebedf0);
        padding-top:0.36rem;
        .list{
            color: #333;
            padding-bottom:0.36rem;
            .iconfont{
                color:#c0c0c0;
                margin-right:0.28rem;
            }
            .icon-jian2{
                color:#fb4d41;
            }

        }
    }

}
</style>