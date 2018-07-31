<template>
    <div>1:<!--获取url传参数据{{$route.params.hehe}}-->
      <router-link to="/test/title1">标题1</router-link>
        <br/>
      2:<!--获取url传参数据 {{$route.params.haha}}-->
      <router-link to="/test/title2">标题2</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "nimei",
        data(){
            return {
                msg: "Hello Vue"
            }
        }
    }
</script>

<style scoped></style>
