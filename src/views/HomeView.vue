<template>
  <div>
    <router-link to="/test">
      Go to test
    </router-link>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

// 页面加载时自动跳转到 /test
onMounted(() => {
  router.push('/test');
});

</script>

<style lang="scss">

</style>
