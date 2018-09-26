<template>
    <div>
        aaa
    </div>
</template>
<script>
    export default {
        data(){
            return{
                aaa:''
            }
        },
        created() {
            // this.handleTest()
            this.handleAsync()
        },
        methods:{
            //promise
            handleTest(){
                var P1 = new Promise((resolve,reject)=>{
                    setTimeout(function(){
                        resolve(1);
                    },2000);
                })
                var P2 = new Promise((resolve,reject)=>{
                    setTimeout(function(){
                        resolve(3);
                    },1000);
                })
                Promise.all([P1, P2]).then(()=>{
                    alert(1)
                })
            },
            //async await
            handleAsync() {
                
                async function showData() {
                    await setTimeout((resolve,reject)=>{
                        return 1
                    },5000)
                    
                }
                async function showData1() {
                    await setTimeout((resolve,reject)=>{
                        return 2
                    },5000)
                    
                }
                showData().then((res)=>{
                    console.log(res)
                })
                async function f() {
                    return await new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            resolve(1)
                        },2000)
                    })
                }

                f().then(v => console.log(v))
            }
        }
    }
</script>
<style>

</style>
