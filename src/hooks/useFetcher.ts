import { AxiosRequestConfig } from 'axios'
import useSWR from 'swr'
import api from '../services/api'

type Response<D> = {
    data: D | undefined
    error: any
}

export default function useFetcher<D>(
    url: string,
    config?: AxiosRequestConfig
): Response<D> {
    const fetcher = async (url: string) => {
        const { data } = await api(url, config)
        return data
    }
    const { data, error } = useSWR<D, any>(url, fetcher)

    return { data, error }
}
