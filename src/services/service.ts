import type {CreateDTO} from "@/core/dto-types";
import type {Message} from "@/core/message";
import type LogEntry from "@/core/log-entry";
import {type AxiosInstance, type AxiosResponse,} from "axios";
import parseId from "@/core/url-parser";


export type Service<T> = {
    get: () => Promise<AxiosResponse<T[]>>;
    getItem: (id: number) => Promise<AxiosResponse<T>>
    post: (itemToAdd: CreateDTO<T>) => Promise<AxiosResponse<void>>
    postAndGet: ((itemToAdd: CreateDTO<T>) => Promise<AxiosResponse<T>>)
    put: (newItem: T) => Promise<AxiosResponse<T, 200>>;
    delete: (itemToDelete: T) => Promise<AxiosResponse<void>>;
}

function service<T extends { id: number }>(axiosInstance: AxiosInstance, path: string): Service<T> {
    return {
        get: () => axiosInstance.get<T[]>(`/${path}`),
        getItem: (id: number) => axiosInstance.get<T>(`/${path}/${id}`),
        post: (itemToAdd: CreateDTO<T>) => axiosInstance.post<void>(`/${path}`, itemToAdd),
        postAndGet: (itemToAdd: CreateDTO<T>) => axiosInstance.post<void>(`/${path}`, itemToAdd)
            .then(response => response.headers)
            .then(headers => headers["location"])
            .then(parseId)
            .then(id => axiosInstance.get<T>(`/${path}/${id}`)),
        put: (newItem: T) => axiosInstance.put<T>(`/${path}/${newItem.id}`, newItem),
        delete: (itemToDelete: T) => axiosInstance.delete(`/${path}/${itemToDelete.id}`)
    }
}

export const messageService = (axiosInstance: AxiosInstance) => service<Message>(axiosInstance, 'messages');
export const logService = (axiosInstance: AxiosInstance) => service<LogEntry>(axiosInstance, 'logs');