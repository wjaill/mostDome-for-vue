<template>
    <div>
        <h1>这是ID为{{$route.params.id}}的详情页</h1>
    </div>    
</template>
<script>
    export default {
        created() {
            console.log(this.$route.params.id)
        },
    }
</script>