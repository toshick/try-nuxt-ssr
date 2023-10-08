<template>
  <ul class="Nav">
    <li v-for="n in 3">
      <NuxtLink :to="`/items/${n}/`">Item{{ n }}</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
  .Nav {
    display: flex;
  }
  li + li {
    margin-left: calc(var(--unit) * 3);
  }
  a {
    color: #333;
  }
</style>
