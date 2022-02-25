import axios from 'axios'

export default class ApiService {
    constructor() {
        this.url = 'https://api.tvmaze.com'
        this.request = {
            method: 'get',
            url: this.url,
        };
    }
    getShows(params = null) {
        let that = this;
        that.request.url = `${this.url}/shows`;

        if(params && params.search){
            that.request.url = `${this.url}/search/shows?q=${params.search}`;
        } 

        return axios(that.request).then((response) => {
            return response.data;
        });
    };
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
    };
    getEpisodeByID(params){
        let that = this;
        if(!params.id){
            console.log(params)
            throw new Error('Missing episode ID');
        }
        that.request.url = `${this.url}/episodes/${params.id}`; 
        return axios(that.request).then((response) => {
            console.log(response.data);
            return response.data;
        });
    };
};