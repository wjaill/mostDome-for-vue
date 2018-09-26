<template>
    <div id="emit">
        <button @click="bus">按钮</button>
    </div>
 </template> 
<script>
import Bus from './bus.js' 
export default { 
    data() {
        return {
            message: ''
        }
     },
　　methods: {
       bus () {
           //触发
           Bus.$emit('msg', '我要传给兄弟组件们，你收到没有')
       }
    },
    beforeDestroy() {
        //组件销毁前需要解绑事件。否则会出现重复触发事件的问题
        Bus.$off('msg');
    },
}
</script>
