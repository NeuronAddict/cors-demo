import {expect, test} from 'vitest'
import {messageStoreProvider} from "../../src/core/store-provider";

test('delete from messageStore', () => {

    const messageStore = messageStoreProvider();

    messageStore.items = [
        {
            id: 1,
            author: "Truc",
            dueDate: '01/12/2024',
            message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque. "
        },
        {
            id: 2,
            author: "Bidule",
            dueDate: '16/08/2024',
            message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis. "
        },
        {
            id: 3,
            author: "Machin",
            dueDate: '12/12/2025',
            message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."
        },
        {
            id: 4,
            author: "Spam",
            dueDate: '06/09/2026',
            message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit."
        },
        {
            id: 5,
            author: "Truc",
            dueDate: '07/07/2025',
            message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."
        }
    ]
    messageStore.delete(messageStore.items[0]);
    expect(messageStore.items).toHaveLength(4);
});

test('add from messageStore', () => {

    const messageStore = messageStoreProvider();

    messageStore.items = [
        {
            id: 1,
            author: "Truc",
            dueDate: '01/12/2024',
            message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque. "
        },
        {
            id: 2,
            author: "Bidule",
            dueDate: '16/08/2024',
            message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis. "
        },
        {
            id: 3,
            author: "Machin",
            dueDate: '12/12/2025',
            message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."
        },
        {
            id: 4,
            author: "Spam",
            dueDate: '06/09/2026',
            message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit."
        },
        {
            id: 5,
            author: "Truc",
            dueDate: '07/07/2025',
            message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."
        }
    ]
    messageStore.add({id: 6, author: "Truc6", dueDate: '07/07/2025', message: "Quisque et "});
    expect(messageStore.items).toHaveLength(6);
});

test('modify from messageStore', () => {

    const messageStore = messageStoreProvider();

    messageStore.items = [
        {
            id: 1,
            author: "Truc",
            dueDate: '01/12/2024',
            message: "Sed elementum malesuada commodo. Vestibulum vehicula viverra vestibulum. Fusce dolor sapien, varius eu venenatis id, dictum sed dui. Praesent mauris magna, iaculis non mauris ac, bibendum facilisis metus. Sed eu elementum ligula. Maecenas eget libero metus. Pellentesque feugiat nunc eleifend, pharetra nisi a, accumsan turpis. Quisque aliquet varius aliquet. Pellentesque. "
        },
        {
            id: 2,
            author: "Bidule",
            dueDate: '16/08/2024',
            message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Suspendisse auctor lacus at felis accumsan vehicula. Nam metus risus, ultrices quis tortor vel, ornare aliquet nisi. Nunc faucibus arcu velit, et rutrum elit ultricies a. Sed ut scelerisque erat. Quisque quis. "
        },
        {
            id: 3,
            author: "Machin",
            dueDate: '12/12/2025',
            message: "In nec tempus ex. Phasellus scelerisque eleifend mi non commodo. Ut a metus vitae nisl efficitur placerat eget at nunc. Suspendisse congue malesuada urna, sed scelerisque metus sodales at. Vestibulum vel lacus tellus. Donec tempor quam odio, et mollis justo."
        },
        {
            id: 4,
            author: "Spam",
            dueDate: '06/09/2026',
            message: "Duis aliquet ultrices velit ut gravida. Suspendisse vitae nunc nec arcu egestas aliquam gravida sed nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et dapibus nibh. Integer rutrum, nunc sed commodo tristique, leo felis rutrum orci, sed cursus orci velit."
        },
        {
            id: 5,
            author: "Truc",
            dueDate: '07/07/2025',
            message: "Quisque et convallis enim, eu laoreet augue. Nullam dui sapien, faucibus et ultrices ut, porttitor id ligula. Nullam et vestibulum sapien. Nam commodo, ex vel pulvinar finibus, purus metus tristique lacus, non volutpat magna nulla quis quam. In vestibulum hendrerit odio, sit amet."
        }
    ]
    const item = {id: 5, author: "Truc5", dueDate: '07/07/2025', message: "Quisque et "};
    messageStore.modify(item);
    expect(messageStore.items).toHaveLength(5);
    expect(messageStore.items[4]).toEqual(item);
});


