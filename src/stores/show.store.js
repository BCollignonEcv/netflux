import { defineStore } from 'pinia'
import ApiService from '@/services/api.service.js'

const API = new ApiService()

export const useShowStore = defineStore({
    id: 'show',
    state: () => ({
        shows: [],
        show: [],
        episode: [],
        searchedShows: [],
        searchHistory: [],
        search: '',
    }),
    getters: {
        getShows: (state) => {
            return state.shows;
        },
        getShow: (state) => {
            return state.show;
        },
        getShowsHightLight: (state) => {
            return state.shows.slice(0, 16);
        },
        getShowsExeptHightLight: (state) => {
            return state.shows.slice(10, 50);
        },
        getCurrentSearch: (state) => {
            return state.search;
        },
        getSearchHistory: (state) => {
            return state.searchHistory;
        },
        getSearchedShows: (state) => {
            return state.searchedShows;
        },
        hasSearch: (state) => {
            return state.search != '';
        }
    },
    actions: {
        initShows() {
            if (this.shows.length < 1) {
                this.requestShows();
            }
        },
        searchShows(newSearch) {
            if (newSearch != '' && newSearch != this.search) {
                this.search = newSearch;
                this.searchHistory.push(newSearch);
                this.requestSearchShows();
            }
        },
        async requestShows() {
            this.shows = await API.get(API.apiEndpoints.GET_SHOWS);
        },
        async requestShow(id) {
            this.show = await API.get(API.apiEndpoints.GET_SHOW, { 0: id });
        },
        async requestShowWithEpisodes(id) {
            this.show = await API.get(API.apiEndpoints.GET_SHOW_AND_EPISODES, { 0: id });
        },
        async requestEpisode(id, saison, episode) {
            this.episode = await API.get(API.apiEndpoints.GET_SHOW_AND_EPISODES, { 0: id, 1: saison, 2: episode });
        },
        async requestSearchShows(search) {
            this.searchedShows = await API.get(API.apiEndpoints.SEARCH_SHOWS, { 0: search });
        }
    }
})