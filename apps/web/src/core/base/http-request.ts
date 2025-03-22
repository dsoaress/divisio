export interface HttpRequest {
  get<Result, Params>(url: string, params?: Params, options?: RequestInit): Promise<Result>
  post<Result, Body>(url: string, body?: Body, options?: RequestInit): Promise<Result>
  patch<Result, Body>(url: string, body?: Body, options?: RequestInit): Promise<Result>
  put<Result, Body>(url: string, body?: Body, options?: RequestInit): Promise<Result>
  del<Result>(url: string, options?: RequestInit): Promise<Result>
}
