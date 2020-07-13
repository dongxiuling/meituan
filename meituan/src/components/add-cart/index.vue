<template>
    <div class="add-cart">
        <span class="iconfont icon-jianhao" v-if="product.count" @click="reduceCart()"></span>
        <span class="num" v-if="product.count">{{product.count}}</span>
        <span class="iconfont icon-jiahao" @click="addCart()"></span>
    </div>
</template>

<script>
    export default {
        props:["type","index"],
        computed:{
            product(){
                return this.$store.state.product.productList[this.type].content[this.index];
            }
        },
        methods:{
            addCart(){
                this.$store.commit('product/addCart',{type:this.type,index:this.index})
            },
            reduceCart(){
                this.$store.commit('product/reduceCart',{type:this.type,index:this.index})
            }
        }
    }
</script>

<style lang="scss" scoped>
.add-cart{
    .iconfont{
        font-size: 0.48rem;
        padding:0.18rem;
        vertical-align: middle;
    }
    .icon-jianhao{
        color:#e2e3e5;
    }
    .icon-jiahao{
        color:#ffc134;
        margin-right:-0.18rem;
    }
    .num{
       vertical-align: middle;
    }
}
</style>