import { HttpResponse, http } from 'msw'
import type {Message} from "@/core/message";

const messages: Message[] = [
    { author: "Truc", message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque. "},
    { author: "Bidule", message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis. "},
    { author: "Machin", message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."},
    { author: "Spam", message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit." },
    { author: "Truc", message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."},
]

export const restHandlers = [
    http.get('/api/v1/messages', () => {
        return HttpResponse.json(messages)
    }),
]
