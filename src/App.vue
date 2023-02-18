<script setup>

</script>

<template>
  <main>
    <Suspense>
      <router-view />
    </Suspense>
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
