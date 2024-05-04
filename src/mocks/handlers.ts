import { HttpResponse, http } from 'msw'
import type {Message} from "@/core/message";

const messages: Message[] = [
    { author: "Truc", message: "Un petit message pour dire bonjour"},
    { author: "Bidule", message: "On s'en fout de dire bonjour"},
    { author: "Machin", message: "Et voilà déjà des messages de trolls négatifs"},
    { author: "Spam", message: "Viagra ?" }
]

export const restHandlers = [
    http.get('/api/v1/messages', () => {
        return HttpResponse.json(messages)
    }),
]
