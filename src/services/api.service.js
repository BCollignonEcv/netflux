import axios from 'axios'

export default class ApiService {
    constructor() {
        this.request = {
            method: 'get',
            url: 'https://api.tvmaze.com',
        };
    }
    
    getShowByID(params) {
        let that = this;
        if(!params.id){
            throw new Error('Missing ID');
        }
        that.request.url = `${that.request.url}/shows/${params.id}`;
        return axios(that.request).then((response) => {
            return response.data;
        });
    };
    getShowEpisodes(params) {
        let that = this;
        if(!params.show.id){
            throw new Error('Missing show ID');
        }
        that.request.url = `${that.request.url}/shows/${params.show.id}/episodes`;
        return axios(that.request).then((response) => {
            return response.data;
        });
    };
    getShowWithEpisodes(params) {
        let that = this;
        if(!params.show.id){
            throw new Error('Missing show ID');
        }
        that.request.url = `${that.request.url}/shows/${params.show.id}?embed=episodes`;
        return axios(that.request).then((response) => {
            return response.data;
        });
    };
    searchShows(params) {
        let that = this;
        if(!params.search){
            throw new Error('Missing search');
        }
        that.request.url = `${this.request.url}/shows?q=${params.search}`;
        console.log(that)
        return axios(that.request).then((response) => {
            return response.data;
        });
    };
};