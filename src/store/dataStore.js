import { defineStore } from 'pinia'
import { fetchPosts } from '@/composables/useApi.js';

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        leagueData: null,
        bkleagueData: null,
    }),
    actions: {
        async fetchData() {
            if (!this.leagueData) {  // 檢查快取中是否已有數據
                try {
                    this.leagueData = await fetchPosts('存取資料到快取的API')
                } catch (error) {
                    console.error('Failed to fetch league data:', error)
                }
            }
        },
        async fetchData2() {
            if (!this.bkleagueData) {  // 檢查快取中是否已有數據
                try {
                    this.bkleagueData = await fetchPosts('存取資料到快取的API')
                } catch (error) {
                    console.error('Failed to fetch league data:', error)
                }
            }
        },
    },
})