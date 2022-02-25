import { defineStore } from 'pinia'
import ApiService from '@/services/api.service.js'

const ApiServiceInstance = new ApiService()

export const useShowStore = defineStore({
    id: 'show',
    state: () => ({
        searchHistory: [],
        search: '',
        shows: {
            all: [],
            show: {},
            episode : {},
            searchResults: [],
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
        getEpisode: (state) => { 
            return state.shows.episode ;
        },
    },
    actions: {
        initShows(){
            this.requestShows();
        },
        initEpisode(id) {
            this.requestEpisode(id);
        },
        newSearch(newSearch){
            if(newSearch != '' && newSearch != this.search){
                this.search = newSearch;
                this.searchHistory.push(newSearch);
                this.requestSearchShows();
            }
        },
        async requestShows(){
            this.shows.all = await ApiServiceInstance.getShows();
        },
        async requestEpisode(id){
            this.shows.episode = await ApiServiceInstance.getEpisodeByID({ id: id}); 
        },
        async requestShow(id){
            this.shows.show = await ApiServiceInstance.getShowByID({ id: id});
        },
        async requestSearchShows(urlSearch = null){
            let search = urlSearch ? urlSearch : this.search;
            this.shows.searchResults = await ApiServiceInstance.getShows({ search: search});
        }
    }
})