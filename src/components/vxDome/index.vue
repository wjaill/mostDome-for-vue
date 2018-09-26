<template>
    <div>
        <span>普通</span><button @click="add">add</button>
        {{$store.state.count}}
        <button @click="sub">sub</button>
        <span>异步</span><button @click="add1">add</button>
        {{$store.state.count}}
        <button @click="sub1">sub</button>
        <h1>{{fillter}}</h1>
    </div>
</template>
<script>
    import { mapState,mapGetters, mapMutations } from 'vuex'
    export default {
        methods:{
            //使用辅助函数进行操作
            // ...mapMutations([
            //     'add',
            //     'sub'
            // ]),
            //不使用辅助函数
            add(){
                this.$store.commit('add')
            },
            sub(){
                this.$store.commit('sub')
            },
            //action也提供了辅助函数 同上
            add1(){
                this.$store.dispatch("add")
            },
            sub1(){
                this.$store.dispatch("sub")
            }
        },
        computed:{
            //也可以使用普通方式 this.$store.getters.fillter
            ...mapGetters([
                'fillter',
            ])
        }
    }
</script>
<style>

</style>