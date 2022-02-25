import axios from 'axios'

export default class ApiService {
    constructor() {
        this.url = 'https://api.tvmaze.com'
        this.request = {
            method: 'get',
            url: this.url,
        };
        this.apiEndpoints = {
            GET_SHOWS: '/shows',
            GET_SHOW: '/show/{0}',
            GET_SHOW_AND_EPISODES: '/shows/{0}?embed[]=episodes&embed[]=cast',
            GET_EPISODE: '/episodes/{0}',
            SEARCH_SHOWS: '/search/shows?q={0}',
        }
    }
    get(endpoint, params = {}) {
        let that = this;
        let url = this.url + endpoint;
        that.request.url = feedRequestUrl(url, params);
        return axios(that.request).then((response) => {
            return response.data;
        });
    };
};

function feedRequestUrl(url, params) {
    let paramsRequired = url.match(/{\d}/)
    if (paramsRequired) {
        if (paramsRequired.length != Object.keys(params).length) {
            throw new Error('api.service - Missing request params');
        }
        paramsRequired.forEach((value, index) => {
            url = url.replace(value, params[index])
        });
    }
    return url;
}