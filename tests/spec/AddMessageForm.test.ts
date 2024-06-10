import {expect, test} from "vitest";
import {flushPromises, mount} from "@vue/test-utils";
import vuetify from "../../src/plugins/vuetify";
import AddMessageForm from "../../src/components/messages/AddMessageForm.vue";
import axiosConfig from "../../src/services/axios-config";
import {logStoreProvider, messageStoreProvider,} from "../../src/core/store-provider";
import {testServicePlugin, testStorePlugin} from "../plugins";


global.ResizeObserver = require('resize-observer-polyfill')

test('Add message', async () => {

    const axiosInstance = axiosConfig.newAxios();
    axiosInstance.interceptors.request.use(async config => {
        config.headers.Authorization = `Bearer FakeAccessToken`;
        return config;
    });

    const messageStore = messageStoreProvider();
    const logStore = logStoreProvider();

    const wrapper = mount(AddMessageForm, {
        global: {
            plugins: [vuetify, testServicePlugin(axiosInstance), testStorePlugin(messageStore, logStore)],
        },
        props: {
            author: 'anonymous'
        }
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

    expect(messageStore.items).toHaveLength(1);
    expect(messageStore.items[0].message).toEqual('First message');
    expect(messageStore.items[0].dueDate).toEqual('2025-01-01');

    expect(logStore.items).toHaveLength(1);
    expect(logStore.items[0].message.message).toEqual('First message');
    expect(logStore.items[0].type).toEqual('add');
    expect(logStore.items[0].initiator).toEqual('anonymous');
});