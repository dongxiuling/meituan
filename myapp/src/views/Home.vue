<template>
    <div>
        {{count}}
        <!-- <h2>{{$store.getters['moduleA/sum']}}</h2> -->
        <h2>{{sum}}</h2>
        <button @click="addMutation(3)">add </button>
        <!-- <button @click="$store.dispatch('addAction')">add Action</button> -->
        <button @click="addAction()">add Action</button>

        <button @click="$router.go(-1)">返回</button>
        <button @click="go()">我的页面</button>
        我是首页{{$route.params.name}}  {{$route.params.age}}
        <router-link to="/home/test1">test1</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        methods:{
            go(){
                // this.$router.push('/mine')
                this.$router.push({path:'/mine',query:{name:'zs'}})
            },
            add(num){
                this.$store.commit('moduleA/addMutation',num)
            },
            ...mapMutations("moduleA",['addMutation']),
            ...mapActions("moduleA",['addAction'])
        },
        computed:{
            ...mapState("moduleA",['count']),
            ...mapGetters("moduleA",['sum'])
        }
    }
</script>

<style lang="scss" scoped>

</style>