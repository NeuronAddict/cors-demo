import config from '@/services/config'
import type {CreateDTO} from "@/core/dto-types";
import type {Message} from "@/core/message";
import type LogEntry from "@/core/log-entry";
import type {AxiosInstance, AxiosResponse} from "axios";

function service<T extends { id: number }>(axiosInstance: AxiosInstance, path: string): {
    get: () => Promise<AxiosResponse<T[]>>;
    post: (itemToAdd: CreateDTO<T>) => Promise<AxiosResponse<T>>;
    put: (newItem: T) => Promise<AxiosResponse<T>>;
    delete: (itemToDelete: T) => Promise<AxiosResponse<void>>;
} {
    return {
        get: () => axiosInstance.get<T[]>(`/${path}`),
        post: (itemToAdd: CreateDTO<T>) => axiosInstance.post<T>(`/${path}`, itemToAdd),
        put: (newItem: T) => axiosInstance.put<T>(`/${path}/${newItem.id}`, newItem),
        delete: (itemToDelete: T) => axiosInstance.delete(`/${path}/${itemToDelete.id}`)
    }
}

export const messageService = service<Message>(config, 'messages');
export const logService = service<LogEntry>(config, 'logs');