<template>
    <ul>
        <li v-for="(item,i) in listData" :key="item.id" class="tabList" @click="goDetail(item.id)">
            名字<span style="color:red"> {{item.text}}</span>
            价格<span style="color:red;font-size:20px;"> {{item.price}}</span>          
        </li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                listData:[
                    {id:1,text:"鞋子",price:"100"},
                    {id:2,text:"毛皮",price:"100"},
                    {id:3,text:"大衣",price:"100"},
                    {id:4,text:"T恤",price:"100"},
                    {id:5,text:"报纸",price:"100"},
                ]
            }
        },
        methods:{
            //使用路由中name跳转 并传递id  需要在路由中配置
            goDetail(id) {
                this.$router.push({
                    name:"detail",
                    params:{id:id}
                })
            },
            //query的方式 获取时 应该this.$route.query.id获取
            // goDetail(id){
            //     this.$router.push({
            //         path: '/detail',
            //         query: {
            //             id: id
            //         }
            //     })
            // }
        }
    }
</script>
<style type="text/css" scoped>
    *{margin:0;padding:0;}
    .tabList {
        width:180px;
        height:40px;
        border:1px solid #ccc;
        padding:10px;
        line-height:40px;
        cursor:pointer;
        margin-top:10px;
    }
</style>