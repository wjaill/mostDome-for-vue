const mutations = {
    add(state) {
        console.log(state)
        state.count = ++ state.count
    },
    sub(state) {
        state.count = -- state.count
    },
}
export default mutations