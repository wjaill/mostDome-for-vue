const actions = {
    add({commit}){
        //使用延时函数模拟异步操作
        setTimeout(()=>{
            commit("add")
        },1000)
    },
    sub({commit}){
        setTimeout(()=>{
            commit("sub")
        },1000)
    }
}
export default actions