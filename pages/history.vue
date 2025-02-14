<template>
    <div class="container_history">
        <h1 class="title-1">История просмотра</h1>
        <div class="history_videos">
            <videoHistory  v-for="video in getHistoryStore.getHistory" :video="video" :key="video.id" />
        </div>
    </div>
</template>
<script setup>

const getHistoryStore = useHistoryStore()
onMounted(() => {
    if (localStorage.getItem('changeTheme')) {
		localStorage.getItem('changeTheme') == 'true' ? document.querySelector('body').classList.add('dark-theme') : document.querySelector('body').classList.remove('dark-theme')
	}
    getHistoryStore.getHistoryAll()
})
</script>
<style>
.title-1 {
    color: #0f0f0f;
    font-size: 36px;
    font-weight: 700;
}
.container_history {
    max-width: 1100px;
    padding-top: 40px;
    width: 100%;
    margin: 0 auto;
}
.history_videos {
    margin-top: 30px;
    max-width: 825px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.history_video {
    display: flex;
    position: relative;
    z-index: 1;
    align-items: start;
    gap: 20px;
}
.history_video-mid {
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: relative;
    z-index: -1;
}
.history_video-img {
    border-radius: 14px;
}
.history_videos-title {
    font-size: 18px;
    font-weight: 500;
    max-width: 500px;
}
.history_video-info {
    color: #606060;
    font-size: 12px;
}
.history_video-description {
    color: #606060;
    font-size: 13px;
}
.history_video-close {
    position: absolute;
    width: 25px!important;
    height: 25px!important;
    top: -5px;
    z-index: 22;
    cursor: pointer;
    right: 20px;
}
</style>