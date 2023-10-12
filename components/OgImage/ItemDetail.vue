<script setup lang="ts">
  // inherited attrs can mess up the satori parser
  defineOptions({ inheritAttrs: false });
  const props = defineProps({ title: String });
</script>
<template>
  <div
    class="w-full h-full flex text-white bg-blue-500 items-center justify-center"
  >
    <h1>{{ title }} 👋</h1>

    <img src="~assets/ogimg/main.png" alt="" />
    <p class="cama border-dashed border-2 border-white rounded p-3">Camaleao</p>
  </div>
</template>
