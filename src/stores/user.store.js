import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        showsList: []
    }),
    getters: {
        // GET
        getShowsList: (state) => { return state.showsList },
        getShowsListFirstTen: (state) => { return state.showsList.slice(0, 10) },

        // HAS
        hasOneShow: (state) => { return state.showsList.length > 0 ? true : false },
        hasShow: (state) => {
            return (showID) => state.showsList.find(x => x.id === showID) ? true : false;
        },
    },
    actions: {
        addShow(show) {
            if (!this.hasShow(show.id)) {
                this.showsList = [...this.showsList, show];
            }
        },
        removeShow(show) {
            this.showsList = this.showsList.filter(function(el) {
                return el.id !== show.id
            });
        }
    }
})