import { defineStore } from 'pinia'
import ApiService from '@/services/api.service.js'

const API = new ApiService()

export const useShowStore = defineStore({
    id: 'show',
    state: () => ({
        shows: [],
        show: [],
        episode: [],
        genres: [],
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
        getEpisode: (state) => {
            return state.episode;
        },
        getShowsHightLight: (state) => {
            return state.shows.slice(0, 10);
        },
        getShowsExceptHightLight: (state) => {
            return state.shows.slice(10, 50);
        },
        getShowsFilter: (state) => {
            return (genre) => {
                return state.genres[genre];
            };
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
                this.provideShowsByFilter('action')
                this.provideShowsByFilter('drama')
            }
        },
        initEpisode(id) {
            this.requestEpisode(id);
        },
        initShowWithEpisodes(id) {
            this.requestShowWithEpisodes(id);
        },
        provideShowsByFilter(genre) {
            this.genres[genre] = Object.entries(this.shows).filter(
                (value) => value.genre.includes(genre)
            );
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
        async requestEpisode(id) {
            this.episode = await API.get(API.apiEndpoints.GET_EPISODE, { 0: id });
        },
        async requestSearchShows(search) {
            this.searchedShows = await API.get(API.apiEndpoints.SEARCH_SHOWS, { 0: search });
        }
    }
})