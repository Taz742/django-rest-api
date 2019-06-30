import axios from 'axios';

export class Http {
    static async get(endpoint, params = {}) {
        return axios.get(endpoint, {
            params,
            headers: Http.getHeaders()
        })
        .then(res => res)
        .catch(err => {
            throw err;
        });
    }

    static async post(endpoint, data = {}) {
        return axios.post(endpoint, data, {
            headers: Http.getHeaders()
        })
        .then(res => res)
        .catch(err => {
            throw err;
        });
    }

    static async put(endpoint, data = {}) {
        return axios.put(endpoint, data, {
            headers: Http.getHeaders()
        })
        .then(res => res)
        .catch(err => {
            throw err;
        });
    }

    static getHeaders() {
        const token = localStorage.getItem("access_token");
        if (token) {
            return {
                "Authorization": `Bearer ${localStorage.getItem("access_token")}`
            }
        } else {
            return {}
        }
    }
}