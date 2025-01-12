<template>
    <div :class="burgerActive ? 'burger active' : 'burger'"  @click="burgerActive = !burgerActive">
        <div class="burger__line"></div>
        <div class="burger__line"></div>
        <div class="burger__line"></div>
    </div>
</template>
<script setup>
const burgerActive = ref(false)
</script>
<style>
.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 22px;
  cursor: pointer;
}

.burger__line {
  width: 100%;
  height: 2px;
  background-color: black;
}
</style>