import { defineStore } from 'pinia'
import ApiService from '@/services/api.service.js'

const ApiServiceInstance = new ApiService()

export const useSearchStore = defineStore({
    id: 'search',
    state: () => ({
        searchHistory: [],
        search: '',
        searchResults: [],
    }),
    getters: {
        getCurrentSearch: (state) => { 
            return state.search ;
        },
        getSearchHistory: (state) => { 
            return state.searchHistory ;
        },
        getSearchResults: (state) => { 
            return state.searchResults ;
        },
        getLastSearch: (state) => {
            if(state.searchHistory.length > 1){
                return {
                    success: true,
                    search: state.searchHistory[state.searchHistory.length-2],
                    message: ''
                }
            }else{
                return {
                    success: false,
                    message: 'Empty History'
                }
            }
        },
    },
    actions: {
        newSearch(newSearch){
            if(newSearch != '' && newSearch != this.search){
                this.search = newSearch;
                this.searchHistory.push(newSearch);
                this.requestSearch();
            }
        },
        async requestSearch(urlSearch = null){
            let search = urlSearch ? urlSearch : this.search;
            this.searchResults = await ApiServiceInstance.searchShows({ search: search});
        }
    }
})