<!--获取url跟取的参数 -->
<template>
      <div>
           1:{{$route.params.hehe}}
        <br/>
           2:{{$route.params.haha}}
      </div>
</template>

<script>
    export default {
        name: "DynamicRouting",
        data(){
            return {
                msg: "Hello Vue"
            }
        }
    }
</script>

<style scoped></style>
