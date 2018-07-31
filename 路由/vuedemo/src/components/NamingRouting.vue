<template>
    <div>~~~~<router-link v-bind:to="{name:'goods'}" >用命名路由器进行跳转</router-link>~~~~</div>
</template>

<script>
    export default {
        name: "NamingRouting",
        data(){
            return {
                msg: "Hello Vue"
            }
        }
    }
</script>

<style scoped></style>
