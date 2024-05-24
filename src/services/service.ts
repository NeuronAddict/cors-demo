import config from '@/services/config'
import type {CreateDTO} from "@/core/dto-types";
import type {Message} from "@/core/message";
import type LogEntry from "@/core/log-entry";

function service<T extends { id: number }>(path: string) {
    return {
        get: () => config.get<T[]>(`/${path}`),
        post: (itemToAdd: CreateDTO<T>) => config.post<T>(`/${path}`, itemToAdd),
        put: (newItem: T) => config.put<T>(`/${path}/${newItem.id}`, newItem),
        delete: (itemToDelete: T) => config.delete(`/${path}/${itemToDelete.id}`)
    }
}

export const messageService = service<Message>('messages');
export const logService = service<LogEntry>('logs');