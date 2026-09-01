export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

export const defaultApiConfig: ApiConfig = {
  baseUrl: 'https://api.corporation.com/v1',
  timeout: 5000
};

export class ApiClient {
  private config: ApiConfig;

  constructor(config = defaultApiConfig) {
    this.config = config;
  }

  async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.config.baseUrl}${endpoint}`;
    console.log(`[ApiClient] MOCK Request: ${options.method || 'GET'} ${url}`);
    
    // Simulate mock fetch response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({} as T);
      }, 300);
    });
  }

  get<T>(endpoint: string) { return this.request<T>(endpoint, { method: 'GET' }); }
  post<T>(endpoint: string, body: any) { return this.request<T>(endpoint, { method: 'POST', body: JSON.stringify(body) }); }
}

export const api = new ApiClient();
