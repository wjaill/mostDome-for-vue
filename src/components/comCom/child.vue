<template>
    <div>
        <h1>这是从父组件接受的数据--{{Data}}</h1>
        <button @click="childClick">儿子给父亲</button>
    </div>
</template>
<script>
    export default {
        props:["Data"],
        data() {
            //数据千万要return
            return {
                childValue:"我是子组件数据"
            }
        },
        created() {

        },
        methods:{
            childClick () {
                // childByValue是在父组件on监听的方法
                // 第二个参数this.childValue是需要传的值
                this.$emit('childByValue', this.childValue)
            }
        }
    }
</script>
