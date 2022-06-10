<template>
  <div class="index">
      <!-- 头部 -->
    <IndexHead />
    <!-- 走马灯 -->
    <IndexCarousel />
    <!-- 产品功能 -->
    <IndexProduct />
    <!-- 应用场景 -->
    <IndexUseage/>
    <!-- 贡献作者 -->
    <IndexAuthor />
  </div>
</template>

<script>
import IndexHead from "@/components/index/IndexHead";
import IndexCarousel from "@/components/index/IndexCarousel";
import IndexAuthor from "@/components/index/IndexAuthor";
import IndexProduct from "@/components/index/IndexProduct";
import IndexUseage from "@/components/index/IndexUseage";
export default {
  name: "index",
  components: { IndexHead, IndexCarousel, IndexAuthor, IndexProduct ,IndexUseage},
};
</script>

<style>

</style>