import { HttpResponse, http } from 'msw'
import type {Message} from "@/core/message";

const messages: Message[] = [
    { author: "Truc", dueDate:'01/12/2024', message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque. "},
    { author: "Bidule", dueDate: '16/08/2024', message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis. "},
    { author: "Machin", dueDate: '12/12/2025', message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."},
    { author: "Spam", dueDate: '06/09/2026', message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit." },
    { author: "Truc", dueDate: '07/07/2025', message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."},

    { author: "Truc", dueDate:'01/12/2024', message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque. "},
    { author: "Bidule", dueDate: '16/08/2024', message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis. "},
    { author: "Machin", dueDate: '12/12/2025', message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."},
    { author: "Spam", dueDate: '06/09/2026', message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit." },
    { author: "Truc", dueDate: '07/07/2025', message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."},
    { author: "Truc", dueDate:'01/12/2024', message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque. "},
    { author: "Bidule", dueDate: '16/08/2024', message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis. "},
    { author: "Machin", dueDate: '12/12/2025', message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."},
    { author: "Spam", dueDate: '06/09/2026', message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit." },
    { author: "Truc", dueDate: '07/07/2025', message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."},
]

let current = messages;

export const restHandlers = [
    http.get('/api/v1/messages', () => {
        console.log('get, return', current);
        return HttpResponse.json(current);
    }),
    http.post('/api/v1/messages',
            async info => {
        const content = await info.request.clone().json() as Message;
        current.push(content);
        console.log('post, return', content)
        return HttpResponse.json(content);
    }),
    http.delete('/api/v1/messages/:id', info => {
        const id = parseInt(info.params.id as string);
        current = current.filter((value, index) => index !== id);
        console.log('delete for id', id, 'return 204');
        return HttpResponse.text('', {status: 204});
    })
]
