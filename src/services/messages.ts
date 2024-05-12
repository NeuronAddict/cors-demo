import config from '@/services/config'
import type {Message} from "@/core/message";
import type {CreateDTO} from "@/core/dto-types";

export default {
    get: () =>  config.get<Message>('/messages'),
    post: (message: CreateDTO<Message>) => config.post('/messages', message),
    put: (newMessage: Message) => config.put(`/messages/${newMessage.id}`, newMessage),
    delete: (message: Message) => config.delete(`/messages/${message.id}`)
}
