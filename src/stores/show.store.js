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
            showEpisodes: [],
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
        getShow: (state) => { 
            return state.shows.show ;
        },
        getShowEpisodes: (state) => { 
            return state.shows.showEpisodes ;
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
            this.requestShows();
        },
        initShow(id){
            this.requestShow(id);
        },
        initShowEpisodes(id){
            this.requestShowEpisodes(id);
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
        async requestShow(id){
            this.shows.show = await ApiServiceInstance.getShowByID({ id: id});
        },
        async requestShowEpisodes(id){
            this.shows.showEpisodes = await ApiServiceInstance.getShowEpisodesByID({ id: id});
        },
        async requestSearchShows(urlSearch = null){
            let search = urlSearch ? urlSearch : this.search;
            this.shows.searchResults = await ApiServiceInstance.getShows({ search: search});
        }
    }
})