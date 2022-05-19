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
import IndexHead from "@/components/IndexHead";
import IndexCarousel from "@/components/IndexCarousel";
import IndexAuthor from "@/components/IndexAuthor";
import IndexProduct from "@/components/IndexProduct";
import IndexUseage from "@/components/IndexUseage";
export default {
  name: "index",
  components: { IndexHead, IndexCarousel, IndexAuthor, IndexProduct ,IndexUseage},
};
</script>

<style>
.index {
  /* height: 500vh; */
}
</style>