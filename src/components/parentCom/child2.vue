<template>
    <div id="on">
            <p>在监听{{message}}</p>
    </div>
</template>
<script>
import Bus from './bus.js'
export default {
    data() {
        return {
            message:  ''
        }
    },
    mounted() {
　　　　 let that = this
        //监听
        Bus.$on('msg', (e) => {
            that.message = e
    　　　　console.log(`传来的数据是：${e}`)
        })
    },
    beforeDestroy() {
        //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
        Bus.$off('msg');
    },
}
</script>
