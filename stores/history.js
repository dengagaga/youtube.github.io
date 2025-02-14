export const useHistoryStore = defineStore('historyStore', () => {
    const getHistory = ref([])
    const getHistoryAll = async () => {
        const response = await fetch('https://41b866c117497632.mokky.dev/history')
        const responses = await response.json()
        getHistory.value = responses
    }
    const deleteHistory = () => {
        getHistory.value = []
    }
    const deleteHistoryItem = (video) => {
        getHistory.value = getHistory.value.filter(e => e.id != video.id)
    }
    return {
        getHistory, getHistoryAll, deleteHistoryItem, deleteHistory
    }
})