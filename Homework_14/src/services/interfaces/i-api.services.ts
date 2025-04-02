export interface IApiService {
    get(uri: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response>;
}
