import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import _ from '../utils/lodash';
import { api_urls } from './api_urls';

class APIService {
    axiosNoInterceptor: AxiosInstance;
    api_urls = api_urls;
    axiosOptions: AxiosRequestConfig = {
        timeout: 300000,
        withCredentials: true
    };
    ContentHeaders = {
        Json: 'application/json',
        FormData: 'multipart/form-data',
        Plain: 'text/plain'
    };

    BaseDomain = {
        BASE: process.env.BASE
    };

    isNotificationCall = false;
    strings: any;
    constructor() {
        this.axiosNoInterceptor = axios.create();

        axios.interceptors.response.use((response: any) => {
            if (response.status > 300) {
                //alert
            }

            return response;
        }, (error) => {
            if (error.response) {
                if (error.response.status === 401) {
                }
                if (error.response.status === 409 || error.response.status === 404 || error.response.status === 401 || error.response.status === 400) {
                    return error.response;
                }
                if (error.response.status === 500) {
                    return error.response;
                }
            }
            return this.responsePromise(error);
        });

        this.axiosNoInterceptor.interceptors.response.use((response) => {

            return response;
        }, (error) => {
            if (error.response.status === 400) {
                return new Promise((resolve, reject) => {
                    if (error.response) {
                        reject(error.response.data);
                    } else {
                        reject(error);
                    }
                });
            }
            return this.responsePromise(error);
        });

    }

    responsePromise(res:any) {
        return new Promise((resolve, reject) => {
            if (res.response) {
                resolve(res);
            } else {
                reject(res);
            }
        });
    }

    getHeadersByType(requestMethod: string, headerType: string, domain: string, customHeaders?: any, payload?: any): any {
        let data:any = {};
        switch (headerType) {
            case this.ContentHeaders.Json: {
                data['Content-Type'] = 'application/json';
                break;
            }
            case this.ContentHeaders.Plain: {
                data['Content-Type'] = 'text/plain';
                break;
            }
            case this.ContentHeaders.FormData: {
                data['Content-Type'] = 'multipart/form-data';
                break;
            }
            default:
                data['Content-Type'] = 'application/json';
                break;
        }
        data = _.extend({}, data, customHeaders);
        return data;
    }

    post = (data: {
        endPoint: string;
        payLoad?: any;
        domain?: any;
        headerType?: string;
        customHeaders?: any;
        showLoader?: boolean;
        useNonInterceptor?: boolean;
    }) => {
        if (!data.domain) {
            data.domain = this.BaseDomain.BASE;
        }
        if (!data.headerType) {
            data.headerType = this.ContentHeaders.Json;
        }

        if (data.showLoader || data.showLoader === undefined) {
            data.showLoader = true;
        }

        if (!data.useNonInterceptor) {
            data.useNonInterceptor = false;
        }

        if (data.showLoader) {
        }
        if (data.useNonInterceptor) {
            let payLoadData = data.payLoad instanceof FormData ? data.payLoad : JSON.stringify(data.payLoad);
            return this.axiosNoInterceptor.post(data.endPoint,
                payLoadData, {
                timeout: this.axiosOptions.timeout,
                transformRequest: this.axiosOptions.transformRequest,
                baseURL: data.domain,
                headers: this.getHeadersByType(data.headerType, data.domain, data.customHeaders)
            });

        } else {
            let payLoadData = data.payLoad instanceof FormData ? data.payLoad : JSON.stringify(data.payLoad);
            return axios.post(data.endPoint,
                payLoadData, {
                timeout: this.axiosOptions.timeout,
                transformRequest: this.axiosOptions.transformRequest,
                baseURL: data.domain,
                headers: this.getHeadersByType('post', data.headerType, data.domain, data.customHeaders, data.payLoad)
            });

        }
    }

    isNetworkError = (error: { response: any; code: string; }) => {
        return !error.response && error.code !== 'ECONNABORTED';
    }

    retry = (config: AxiosRequestConfig) => {
        return axios(config);
    }
    put = (data: {
        endPoint: string;
        payLoad?: any;
        domain?: any;
        id?: string;
        headerType?: string;
        customHeaders?: any;
        showLoader?: boolean;
    }) => {

        if (!data.domain) {
            data.domain = this.BaseDomain.BASE;
        }
        if (!data.headerType) {
            data.headerType = this.ContentHeaders.Json;
        }
        // if (data.headerType === this.ContentHeaders.Json) {
        //     data.payLoad = JSON.stringify(data.payLoad);
        // }
        if (data.showLoader !== false) {
            data.showLoader = true;
        }

        if (data.showLoader) {
        }
        let payLoadData = data.payLoad instanceof FormData ? data.payLoad : JSON.stringify(data.payLoad);
        return axios.put(data.endPoint,
            payLoadData, {
            timeout: this.axiosOptions.timeout,
            transformRequest: this.axiosOptions.transformRequest,
            baseURL: data.domain,
            headers: this.getHeadersByType('put', data.headerType, data.domain, data.customHeaders, data.payLoad)
        });
    }

    delete = (data: {
        endPoint: string;
        payLoad?: any;
        domain?: any;
        id?: string;
        headerType?: string;
        customHeaders?: any;
        showLoader?: boolean
    }) => {

        if (!data.domain) {
            data.domain = this.BaseDomain.BASE;
        }
        if (!data.headerType) {
            data.headerType = this.ContentHeaders.Json;
        }

        if (data.showLoader !== false) {
            data.showLoader = true;
        }

        if (data.showLoader) {
        }

        return axios.delete(data.endPoint, {
            baseURL: data.domain,
            headers: this.getHeadersByType('delete', data.headerType, data.domain, data.customHeaders)
        });
    }

    get = (data: {
        endPoint: string;
        domain: string;
        payLoad?: any;
        id?: string;
        headerType?: any;
        customHeaders?: any;
        showLoader?: boolean;
        noHeadersRequired?: boolean;
    }) => {
        if (data.showLoader || data.showLoader === undefined) {
            data.showLoader = true;
        }
        try {
            return axios.get(data.endPoint, {
                baseURL: data.domain,
                timeout: this.axiosOptions.timeout,
                params: data.payLoad,
                headers: data.noHeadersRequired ? null : this.getHeadersByType('get', data.headerType, data.domain, data.customHeaders)
            });
        } catch (e) {
            console.error('axios get::', e);
        }
    }

}
export const api_service = new APIService();
