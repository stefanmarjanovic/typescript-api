import axios, { AxiosError } from "axios";
import type { AxiosResponse } from "axios";

// API Response struct
interface ApiResponse<T> {
    data: T;
    status: number;
}

// generic function to fetch data from a given URL
export async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
    try {
        const response: AxiosResponse<T> = await axios.get(url);
        return { data: response.data, status: response.status }; 
    } catch (error) {
        const axiosError = error as AxiosError;
        throw new Error(
            `Api request failed: ${axiosError.message} {Status: ${axiosError.response?.status}}`
        )
    }
}