<template>
    <h1>Видео № {{ idVideo }}</h1>
</template>
<script setup>
const { idVideo } = useRoute().params
definePageMeta({
    layout:'video'
})
</script>
<style>

</style>