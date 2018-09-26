<template>
    <div>
        <router-link v-for="(item,i) in listData" :key="item.id" tag="li" :to="item.path" style="cursor:pointer" :class="{'router-link-active':name==item.text}" @click.native="changeClass(item.name)">{{item.text}}</router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                listData:[
                    {id:1,text:"组件通信(父子 兄弟)",path:"parentCom1"},
                    {id:2,text:"eventBus",path:"parent"},
                    {id:3,text:"路由传参",path:"parentList"},
                    {id:4,text:"vuex",path:"vxDome"},
                    {id:5,text:"计算属性以及监听",path:"watDome"},               
                ],
                name:""
            }
        },
        methods:{
            changeClass(name){
                this.name = name
            }
        }
    }    
</script>
<style type="text/css">
    .router-link-active {
        color:red;
    }
</style>