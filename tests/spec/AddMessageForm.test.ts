import {expect, test} from "vitest";
import {messageStore} from "../../src/core/messages-store";
import {flushPromises, mount} from "@vue/test-utils";
import vuetify from "../../src/plugins/vuetify";
import AddMessageForm from "../../src/components/messages/AddMessageForm.vue";
import {logStore} from "../../src/core/logs-store";
import instance from "../../src/services/config";


global.ResizeObserver = require('resize-observer-polyfill')

test('Add message', async () => {

    instance.interceptors.request.use(async config => {
        config.headers.Authorization = `Bearer FakeAccessToken`;
        return config;
    });

    const wrapper = mount(AddMessageForm, {
        global: {
            plugins: [vuetify],
        },
        props: {
            author: 'anonymous'
        },

    });

    await wrapper.get('[data-testid=message-add-input]')
        .get('textarea')
        .setValue('First message');

    await wrapper.get('[data-testid="message-add-date"]')
        .get('input')
        .setValue('2025-01-01');

    await flushPromises();

    expect(wrapper.find('.v-messages__message').exists()).toBeFalsy();

    await wrapper.get('[data-testid="message-add"]').trigger('submit');

    await wrapper.vm.$nextTick();

    await Promise.resolve().then(() => console.log(messageStore.messages));
    await flushPromises()

    expect(messageStore.messages).toHaveLength(1);
    expect(messageStore.messages[0].message).toEqual('First message');
    expect(messageStore.messages[0].dueDate).toEqual('2025-01-01');

    expect(logStore.logs).toHaveLength(1);
    expect(logStore.logs[0].message.message).toEqual('First message');
    expect(logStore.logs[0].type).toEqual('add');
    expect(logStore.logs[0].initiator).toEqual('anonymous');
});