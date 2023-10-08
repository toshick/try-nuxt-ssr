<template>
  <main>
    <Header />
    <Cont>
      <h1>Item {{ id }}</h1>
    </Cont>
  </main>
</template>

<script setup lang="ts">
  const route = useRoute();

  const { id } = route.params;
</script>
