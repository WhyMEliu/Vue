<!--编程式路由-->
<template>
    <div>
     <!-- <div @click="gotoGoods">跳转到商品页面1</div>-->
      <div @click="gotoParameter">跳转到商品页面2</div>
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return {
                msg: "Hello Vue"
            }
        },
      methods:{
            gotoGoods(){
              alert("----1--");
              this.$router.push('/goods');
            },
          gotoParameter(){
              alert("----2-");
            this.$router.push({
                path:'/goods?goodsid=6666'
            });
             /*this.$router.push({
                path:'/goods',
                query:{
                    goodsid:12131
                }
             });*/
            }

      }
    }
</script>

<style scoped></style>
