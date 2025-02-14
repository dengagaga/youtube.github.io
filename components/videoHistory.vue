<template>
   <div class="history_video">
                <img class="history_video-img" :src="video.img" alt="">
                <div class="history_video-mid">
                    <h3  class="history_videos-title">{{ video.title }}</h3>
                    <p class="history_video-info">{{ video.channel }} • {{ video.watchers }}</p>
                    <p class="history_video-description">{{ video.desc }}</p>
                </div>
                <button class="history_video-close" @click="getHistoryStore.deleteHistoryItem(video)">
                    <svg   xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" aria-hidden="true" style="pointer-events: none; display: inherit; width: 100%; height: 100%;"><path d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z"></path></svg>
                </button>
            </div>
</template>
<script setup>
const getHistoryStore = useHistoryStore()
defineProps({
    video: Object
})
</script>
<style>

</style>