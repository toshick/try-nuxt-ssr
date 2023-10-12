<template>
  <div class="Cont">
    <slot />
  </div>
</template>

<style scoped>
  .Cont {
    max-width: var(--cont-width-max);
    margin: 0 auto;
    padding: calc(var(--unit) * 4) calc(var(--unit) * 3);
  }
</style>
