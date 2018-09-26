<template>
    <div>
        <child :Data ="childrenData" @childByValue="childByValue"></child>
        <button @click="giveChild()">父亲给儿子</button>
        <h1>我是子组件给父组件的--{{value}}</h1>
    </div>
</template>
<script>
    import child from "./child.vue"
    export default {
        data() {
            return {
                childrenData:"我是父组件的数据",
                value:""
            }
        },
        components:{
            child
        },
        methods:{
            //更改子组件数据 
            giveChild() {
                this.childrenData = "哈哈哈"
            },
            //监听方法
            childByValue(childValue) {
                // childValue就是子组件传过来的值
                this.value = childValue
            }
        }
    }
</script>
