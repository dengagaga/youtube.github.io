<template>
	<div class="container">
		<div class="btns_index">
			<button @click="btnsActiveToggle(btn)" v-for="btn in arrayBtns" :class="btn.active ? 'btn_index btn_index--active' : 'btn_index'"  :key="btn.id">
				{{ btn.name }}
			</button>
		</div>
		<div class="videos">
			<div v-for="video in getVideos" :key="video.id" class="video">
				<img class="videos_img" :src="video.img" alt="">
				<h3  class="videos_title">{{ video.title }}</h3>
				<div class="channel">
					<!-- <img src="" alt=""> -->
					<p>{{ video.channel }}</p>
					
				</div>
				<div class="channel_bot">
					<p class="watch">{{ video.watchers }}</p>
					<p class="data"> {{ video.date }} </p>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const arrayBtns =  ref([
	{
		id:1,
		name:'Все',
		active: true,
	},
	{
		id:2,
		name:'Видеоигры',
		active: false,
	},
	{
		id:3,
		name:'Подкасты',
		active: false,
	},
	{
		id:4,
		name:'Музыка',
		active: false,
	},
	{
		id:5,
		name:'Сейчас в эфире',
		active: false,
	},
	{
		id:6,
		name:'Джемы',
		active: false,
	},
	{
		id:7,
		name:'Фитнес',
		active: false,
	},
	{
		id:8,
		name:'Туризм',
		active: false,
	},
	{
		id:9,
		name:'Экшен и приключения',
		active: false,
	},
	{
		id:10,
		name:'Симуляторы',
		active: false,
	},
	{
		id:11,
		name:'Кулинария',
		active: false,
	},
])
const btnsActiveToggle =  (el) => {
	arrayBtns.value.forEach(element => {
		element.active = false
	})
	el.active = true
}
// const getVideos = await useFetch('https://41b866c117497632.mokky.dev/video')
const getVideos = [
	{
        "id": 1,
        "title": "iPhone 16 Pro Max месяц спустя в реальной жизни - вся правда",
        "img": "https://i.ytimg.com/vi/dIl9bDqnh-4/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6akYdbTej9BenEsbWcHrgOn7skw",
		"channel":"Wylsacom",
		"watchers":"1 млн просмотров",
		"date":"22 часа назад",
        "isWatched": true,
        "isFavorite": true,
        "top": false,
        "view": false,
        "rating": "8.0"
    },
    {
        "id": 2,
        "title": "ЛЕБЕДЕВ, МЕЗЕНЦЕВ, ЧЕСТНЫЙ: КИТАЙЦЫ ЗАХВАТИЛИ РОССИЙСКИЙ АВТОРЫНОК",
        "img": "https://i.ytimg.com/vi/AvogD6Guqac/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCmkabOc-XRFa0YV8f4JH3GIHhQzQ",
		"channel":"Анатомия Авто",
		"watchers":"39 тыс. просмотров",
		"date":"2 часа назад",
		"isWatched": false,
        "isFavorite": false,
        "top": true,
        "view": false,
        "rating": "8.7"
    },
    {
        "id": 3,
        "title": "Самая БЫСТРАЯ МАШИНА на КАНАЛЕ. AUDI A3 SWAP 2.5T 1000л.с. vs BMW M340i F30 STAGE 4",
        "img": "https://i.ytimg.com/vi/gXbquwvzY-k/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDoZcFI6fVGplRjhMW0gwaSYgDovQ",
        "isWatched": false,
		"channel":"AUTO VRN",
		"watchers":"47 тыс. просмотров",
		"date":"21 час назад",
        "isFavorite": false,
        "top": true,
        "view": false,
        "rating": "8.9"
    },
    {
        "id": 4,
        "title": "ЛАРРАТТ против ЛАЛЕТИНА и МОРОЗОВА в 2025",
		"channel":"IGOR SLADKO",
		"watchers":"17 тыс. просмотров",
		"date":"2 дня назад",
        "img": "https://i.ytimg.com/vi/tiLDVxqoyvo/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD6VWm7S2RQJeJ1waQMbfaDjaE9rA",
        "isWatched": false,
        "isFavorite": false,
        "top": true,
        "view": false,
        "rating": "8.9"
    },
    {
        "id": 5,
        "title": "ПО ФОТКАМ ДУМАЛ ЭТО ГЕЛИК, А ОКАЗАЛСЯ TANK 700 EDITION ONE.",
		"channel":"AcademeG",
		"watchers":"1,2 млн просмотров",
		"date":"3 недели назад",
        "img": "https://i.ytimg.com/vi/WomyTjxnpGk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCK79hDW-_y7KL2gjce7dqSD-ek0g",
        "isWatched": false,
        "isFavorite": false,
        "top": true,
        "view": false,
        "rating": "8.9"
    },
    {
        "id": 6,
        "title": "Прохожу СОБЕСЕДОВАНИЕ НА SENIOR FRONTEND. ЗП 400к и Live coding",
		"channel":"Ulbi TV",
		"watchers":"107 тыс. просмотров",
		"date":"2 недели назад",
        "img": "https://i.ytimg.com/vi/tKM44vPHU0U/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCBrDE8hw6N26lbL7JIEm3MmOK4mA",
        "isWatched": false,
        "isFavorite": false,
        "top": true,
        "view": false,
        "rating": "8.9"
    },

    {
        "id": 7,
        "title": "Что с нашим Автопромом? Конфликт с Давидычем. Марат Boroda",
		"channel":"ДНЕВНИК ХАЧА",
		"watchers":"695 тыс. просмотров",
		"date":"2 недели назад",
        "img": "https://i.ytimg.com/vi/n-dF6_i9DxE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDTJ9qDC-SOdZal64fjZbw6cTg6vw",
        "isWatched": false,
        "isFavorite": false,
        "top": true,
        "view": false,
        "rating": "8.9"
    },
    {
        "id": 8,
        "title": "ASA Cross-Platform Mods Spotlight, January 6 - January 10, 2025",
		"channel":"ARK: Survival Ascended",
		"watchers":"50 тыс. просмотров",
		"date":"1 день назад",
        "img": "https://i.ytimg.com/vi/2md8WWQtUzc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC6j14OgGZILESTC_VbqthbTWBysg",
        "isWatched": false,
        "isFavorite": false,
        "top": true,
        "view": false,
        "rating": "8.9"
    },
    {
        "id": 9,
        "title": "МЫ В ПАРИЖЕ / ВЛОГ",
		"channel":"POPOSHA",
		"watchers":"307 тыс. просмотров",
		"date":"3 недели назад",
        "img": "https://i.ytimg.com/vi/vgTRdp4DGwQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCBEz4LAt9bkUWwzxtGtFtZ5I8Yug",
        "isWatched": false,
        "isFavorite": false,
        "top": true,
        "view": false,
        "rating": "8.9"
    },
    {
        "id": 10,
        "title": "Иван Ургант / Плюшки",
		"channel":"Плюшки",
		"watchers":"2 млн. просмотров",
		"date":"1 неделю назад",
        "img": "https://i.ytimg.com/vi/FfeQydvXT2Y/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCC6yUILtG0IWwpo1gbkZIcJgofnw",
        "isWatched": false,
        "isFavorite": false,
        "top": true,
        "view": false,
        "rating": "8.9"
    },
]
</script>
<style>

.container {
	padding: 30px;
}
.btns_index {
	display: flex;
	margin-bottom: 30px;
	gap: 10px;
}
.btn_index {
	font-size: 14px;
	color: black;
	font-weight: 500;
	padding: 6px 12px;
	border-radius: 6px;
	background-color: rgba(0, 0, 0, 0.05);
}
.btn_index--active {
	color:#fff;
	background-color: #000;
}
.videos {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 40px;
}
.video {
}
.videos_img {
	border-radius: 14px;
}
.videos_title {
	font-size: 16px;
	font-weight: 500;
	margin-top:12px;
	color: #0F0F0F;
}
.channel {
	color: #606060;
	margin-top: 5px;
	font-size: 14px;
}
.channel_bot {
	color: #606060;
	font-size: 14px;
	display: flex;
	gap: 10px;
}
.watch {
}
.data {


}
</style>