import { config } from '@/configs';
import axios, { AxiosInstance } from 'axios';

type CommonHeaders = {
  Accept?: string;
  Authorization?: string;
  'X-Authorization'?: string;
  'Content-Type'?: string;
  'Content-Length'?: string;
  Cookie?: string;
};

export type Headers = CommonHeaders & Record<string, string>;

class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.gohubBackend.api.baseUrl,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async get(url: string, body?: any, headers?: Headers) {
    return (await this.axiosInstance.get(url, { params: body, headers })).data;
  }

  async post(url: string, body?: any, headers?: Headers) {
    return (await this.axiosInstance.post(url, body, { headers })).data;
  }

  async put(url: string, body?: any, headers?: Headers) {
    return (await this.axiosInstance.put(url, body, { headers })).data;
  }

  async patch(url: string, body?: any, headers?: Headers) {
    return (await this.axiosInstance.patch(url, body, { headers })).data;
  }

  async delete(url: string, body?: any, headers?: Headers) {
    return (await this.axiosInstance.delete(url, { params: body, headers }))
      .data;
  }
}

export const ApiService = new AxiosService();
