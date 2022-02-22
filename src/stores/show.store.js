import { defineStore } from 'pinia'
import ApiService from '@/services/api.service.js'

const ApiServiceInstance = new ApiService()

export const useShowStore = defineStore({
    id: 'show',
    state: () => ({
        searchHistory: [],
        search: '',
        shows: {
            searchResults: [],
            news: [],
        },
    }),
    getters: {
        getCurrentSearch: (state) => { 
            return state.search ;
        },
        getSearchHistory: (state) => { 
            return state.searchHistory ;
        },
        getShows: (state) => { 
            return state.shows ;
        },
        getShowsNews: (state) => { 
            return state.shows.news;
        },
        getSearchResults: (state) => { 
            return state.shows.searchResults ;
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
        initShows(){
            this.requestNews();
        },
        newSearch(newSearch){
            if(newSearch != '' && newSearch != this.search){
                this.search = newSearch;
                this.searchHistory.push(newSearch);
                this.requestSearch();
            }
        },
        async requestNews(){
            this.shows.news = await ApiServiceInstance.getShowsNews();
        },
        async requestSearch(urlSearch = null){
            let search = urlSearch ? urlSearch : this.search;
            this.shows.searchResults = await ApiServiceInstance.searchShows({ search: search});
        }
    }
})