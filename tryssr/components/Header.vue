<template>
  <header>
    <NuxtLink to="/">Try SSR</NuxtLink>
    <Nav class="Nav" />
  </header>
</template>

<style scoped>
  header {
    display: flex;
    background-color: #fff;
    padding: calc(var(--unit) * 1) calc(var(--unit) * 2);
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.05);
  }
  a {
    text-decoration: none;
    color: #bbb;
  }
  .Nav {
    margin-left: calc(var(--unit) * 4);
  }
</style>
