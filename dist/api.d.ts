interface ApiResponse<T> {
    data: T;
    status: number;
}
export declare function fetchData<T>(url: string): Promise<ApiResponse<T>>;
export {};
//# sourceMappingURL=api.d.ts.map