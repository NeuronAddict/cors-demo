import {http, HttpResponse} from 'msw'
import type {Message} from "@/core/message";
import type {CreateDTO} from "@/core/dto-types";
import type LogEntry from "@/core/log-entry";

export const mockMessages: Message[] = [
    { id: 1, author: "Truc", dueDate:'01/12/2024', message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque."},
    { id: 2, author: "Bidule", dueDate: '16/08/2024', message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis."},
    { id: 3, author: "Machin", dueDate: '12/12/2025', message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."},
    { id: 4, author: "Spam", dueDate: '06/09/2026', message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit." },
    { id: 5, author: "Truc", dueDate: '07/07/2025', message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."},

    { id: 6, author: "Truc", dueDate:'01/12/2024', message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque."},
    { id: 7, author: "Bidule", dueDate: '16/08/2024', message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis."},
    { id: 8, author: "Machin", dueDate: '12/12/2025', message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."},
    { id: 9, author: "Spam", dueDate: '06/09/2026', message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit." },
    { id: 10, author: "Truc", dueDate: '07/07/2025', message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."},
    { id: 11, author: "Truc", dueDate:'01/12/2024', message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque."},
    { id: 12, author: "Bidule", dueDate: '16/08/2024', message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis."},
    { id: 13, author: "Machin", dueDate: '12/12/2025', message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."},
    { id: 14, author: "Spam", dueDate: '06/09/2026', message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit." },
    { id: 15, author: "Truc", dueDate: '07/07/2025', message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."},
]

export const MockLogs: LogEntry[] = [
    {
        id: 1,
        message: {
            id: 1,
            author: 'Truc',
            message: 'SDCsqdqsd',
            dueDate: '2024-12-12'
        },
        initiator: 'Truc',
        type: "delete"
    },
    {
        id: 2,
        message: {
            id: 2,
            author: 'Machin',
            message: 'SDCsqdqsd',
            dueDate: '2024-01-12'
        },
        initiator: 'Truc',
        type: "add"
    },
    {
        id: 3,
        message: {
            id: 3,
            author: 'Truc',
            message: 'SDCsqdqsd',
            dueDate: '2024-12-12'
        },
        initiator: 'Truc',
        type: "delete"
    },
    {
        id: 4,
        message: {
            id: 4,
            author: 'Truc',
            message: 'SDCsqdqsd',
            dueDate: '2024-12-12'
        },
        initiator: 'Truc',
        type: "delete"
    },
];


const messageData = {
    currentMessages: mockMessages,
    id: mockMessages.length + 1,
    nextId: () => messageData.id++
};

const logsData = {
    currentLogs: MockLogs,
    id: MockLogs.length + 1,
    nextId: () => logsData.id++
}

export const restHandlers = [
    http.get('/api/v1/messages', () => {
        console.log('get, return', messageData.currentMessages);
        return HttpResponse.json(messageData.currentMessages);
    }),
    http.get('/api/v1/logs', () => HttpResponse.json(logsData.currentLogs)),

    http.post('/api/v1/messages',
        async ({request}) => {
                try {
                    const content = await request.json() as CreateDTO<Message>;
                    console.log(`receive a POST request: ${request.url} ${content}`);
                    const newMessage = {...content, id: messageData.nextId()} as Message;
                    messageData.currentMessages.push(newMessage);
                    console.log('post, return', newMessage);
                    return HttpResponse.json(newMessage);
                } catch (error) {
                    console.error(error);
                    return HttpResponse.error();
                }
    }),

    http.post('/api/v1/logs',
        async ({request}) => {
            try {
                const content = await request.json() as CreateDTO<LogEntry>;
                console.log(`receive a POST request: ${request.url} ${content}`);
                const newLogEntry = {...content, id: logsData.nextId()} as LogEntry;
                logsData.currentLogs.push(newLogEntry);
                console.log('post, return', newLogEntry);
                return HttpResponse.json(newLogEntry);
            } catch (error) {
                console.error(error);
                return HttpResponse.error();
            }
        }),

    http.delete('/api/v1/messages/:id', info => {
        const id = parseInt(info.params.id as string);
        messageData.currentMessages = messageData.currentMessages.filter(value => value.id !== id);
        console.log('delete for id', id, 'return 204');
        return HttpResponse.text(null, {status: 204});
    })
]
