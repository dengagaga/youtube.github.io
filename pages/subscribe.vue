<template>
    <div class="container">
        <h1 class="title-1">Подписки</h1>
        
    </div>
    <closeRouting v-if="user.length == 0"></closeRouting>
</template>
<script setup>
const autorizationStore = useAutorizationStore()
const user = autorizationStore.person
console.log(user.value);
</script>
<style>

</style>