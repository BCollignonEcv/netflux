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
        hasOneShow: (state) => { return state.showsList.length > 0 ? true : false},
        hasShow: (state) => { 
            return (showID) => {
                state.showsList.some(element => element.id === showID) ? true : false
            }
        },
    },
    actions: {
        addShow(show){
            if(!this.hasShow(show.id)){
                this.showsList.push(show);
            }
        },
        removeShow(showID){
            if(!this.hasShow(showID)){
                this.showsList.splice(1, this.showsList.find(element => element.id === showID));
            }
        }
    }
})