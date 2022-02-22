import axios from 'axios'

export default class ApiService {
    constructor() {
        this.url = 'https://api.tvmaze.com'
        this.request = {
            method: 'get',
            url: this.url,
        };
    }
    getShowByID(params) {
        let that = this;
        if(!params.id){
            throw new Error('Missing ID');
        }
        that.request.url = `${this.url}/shows/${params.id}`;
        return axios(that.request).then((response) => {
            return response.data;
        });
    };
    getShowEpisodes(params) {
        let that = this;
        if(!params.show.id){
            throw new Error('Missing show ID');
        }
        that.request.url = `${this.url}/shows/${params.show.id}/episodes`;
        return axios(that.request).then((response) => {
            return response.data;
        });
    };
    getShowWithEpisodes(params) {
        let that = this;
        if(!params.show.id){
            throw new Error('Missing show ID');
        }
        that.request.url = `${this.url}/shows/${params.show.id}?embed=episodes`;
        return axios(that.request).then((response) => {
            return response.data;
        });
    };
    getShowsNews(){
        let that = this;
        that.request.url = `${this.url}/updates/shows?since=day`;
        return axios(that.request).then((response) => {
            return Object.values(response.data);
        });
    }
    searchShows(params) {
        let that = this;
        if(!params.search){
            throw new Error('Missing search');
        }
        that.request.url = `${this.url}/search/shows?q=${params.search}`;
        return axios(that.request).then((response) => {
            return response.data;
        });
    };
};