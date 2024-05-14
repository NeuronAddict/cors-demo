// https://vuejs.org/guide/scaling-up/state-management.html

import {reactive} from 'vue'
import type {Message} from "@/core/message";

export const messageStore = reactive({

    messages: [] as Array<Message>,

    add(message: Message) {
        this.messages.push(message);
    },

    modify(newMessage: Message) {
        this.messages = this.messages.map(value => value.id === newMessage.id ? newMessage : value);
    },

    delete(message: Message) {
        this.messages = this.messages.filter(value => value.id !== message.id);
    }

});