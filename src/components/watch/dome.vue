<template>
    <div>
         <input v-model="example0"/><!--{{changeexample0}}-->
    　　 <input v-model="example1"/>
    　　 <input v-model="example2.inner0"/>
    </div>
</template>
<script>
　　 export default {
　　　　　　data(){
　　　　　　　　return {
　　　　　　　　　　example0:"1",
　　　　　　　　　　example1:"",
　　　　　　　　　　example2:{
　　　　　　　　　　　　inner0:1,
　　　　　　　　　　　　innner1:2
　　　　　　　　　　}
　　　　　　　　}
　　　　　　},
　　　　　　watch:{
　　　　　　　　example0(curVal,oldVal){
　　　　　　　　　　console.log(curVal,oldVal);
                  this.example0 = curVal
　　　　　　　　},
　　　　　　　　example1:'a',//值可以为methods的方法名
　　　　　　　　example2:{
　　　　　　　　　//注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
　　　　　　　　　　handler(curVal,oldVal){
　　　　　　　　　　　　console.log(curVal,oldVal)
　　　　　　　　　　},
　　　　　　　　　　deep:true
　　　　　　　　}
　　　　　　},
        //    computed:{
        //        changeexample0(){
        //            return this.example0*1+10
        //        }
        //    },
　　　　　　methods:{
　　　　　　　　a(curVal,oldVal){
　　　　　　　　　　console.log(curVal,oldVal)
　　　　　　　　}
　　　　　　}
    }
</script>
