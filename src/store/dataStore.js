import { defineStore } from 'pinia'
import { fetchPosts } from '@/composables/useApi.js';

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        leagueData: null,
        bkleagueData: null,
    }),
    actions: {
        async fetchLeagueData() {
            if (!this.leagueData) {  // 檢查快取中是否已有數據
                try {
                    this.leagueData = await fetchPosts('https://befenscore.net/api/league-data')
                } catch (error) {
                    console.error('Failed to fetch league data:', error)
                }
            }
        },
        async bkLeagueData() {
            if (!this.bkleagueData) {  // 檢查快取中是否已有數據
                try {
                    this.bkleagueData = await fetchPosts('https://befenscore.net/bk/league-data')
                } catch (error) {
                    console.error('Failed to fetch league data:', error)
                }
            }
        },
    },
})