import axios from "axios";

type IConfig = {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
};

export abstract class HttpService {
  private static initConfig(config: IConfig) {
    config.headers = {
      ...config.headers,
      // manage addition for headers
    };
    config.baseURL = "https://swapi.dev/api";

    return config;
  }

  protected static get(url: string, config: any = {}): Promise<any> {
    const newConfig = this.initConfig(config);
    return axios.get(url, newConfig);
  }

  protected static post<DataRequest = any>(
    url: string,
    data: DataRequest,
    config: any = {}
  ): Promise<any> {
    const newConfig = this.initConfig(config);
    return axios.post(url, data, newConfig);
  }

  protected static patch<DataRequest = any>(
    url: string,
    data: DataRequest,
    config: any = {}
  ): Promise<any> {
    const newConfig = this.initConfig(config);
    return axios.patch(url, data, newConfig);
  }

  protected static delete(url: string, config: any = {}): Promise<any> {
    const newConfig = this.initConfig(config);
    return axios.delete(url, newConfig);
  }
}
