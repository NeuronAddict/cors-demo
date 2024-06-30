// https://vuetifyjs.com/en/getting-started/unit-testing/#setup-vitest
import {flushPromises, mount} from "@vue/test-utils";
import MessageList from "../../src/components/messages/MessageList.vue";
import vuetify from "../../src/plugins/vuetify";
import {expect, test} from "vitest";
import {mockMessages} from "../../src/mocks/handlers";
import instanceProvider from "../../src/services/axios-config";
import {server} from "../setup";
import {http, HttpResponse} from "msw";
import {service} from "../../src/plugins/service";
import {testServicePlugin, testStorePlugin, testUserManagerPlugin} from "../plugins";
import {store} from "../../src/plugins/store";
import MessageBox from "../../src/components/messages/MessageBox.vue";
import {VCheckbox} from "vuetify/components/VCheckbox";
import {VBtn} from "vuetify/components/VBtn";
import {logStoreProvider, messageStoreProvider} from "../../src/core/store-provider";

global.ResizeObserver = require('resize-observer-polyfill')


test('List Messages', async () => {

    const axiosInstance = instanceProvider.newAxios();
    axiosInstance.interceptors.request.use(async config => {
        config.headers.Authorization = `Bearer FakeAccessToken`;
        return config;
    });

    const wrapper = mount(MessageList, {
        global: {
            plugins: [vuetify, testServicePlugin(axiosInstance), store, testUserManagerPlugin("alice")],
        },
    });

    await wrapper.vm.$nextTick();
    await flushPromises();

    const findAll = wrapper.findAll('[data-testid=message-box-item]');
    expect(findAll).toHaveLength(15);

    let i = 0;
    [...findAll].reverse().forEach(messageBox => {
        expect(messageBox.find('[data-testid="message-box-item-message"]').text().trim()).toEqual(mockMessages[i].message);
        expect(messageBox.find('[data-testid="message-box-item-author"]').text().trim()).toContain(' ' + mockMessages[i].dueDate);
        i++;
    });
});

test('List Messages When auth error', async () => {

    server.use(
        http.get('/api/v1/messages', () => HttpResponse.text(null, {status: 403}))
    )

    const wrapper = mount(MessageList, {
        global: {
            plugins: [vuetify, service, store, testUserManagerPlugin("alice")]
        }
    });

    await wrapper.vm.$nextTick();
    await flushPromises();

    const findAll = wrapper.findAll('[data-testid=message-box-item]');
    expect(findAll).toHaveLength(0);
    expect(wrapper.find('[data-testid=message-list-error]').text()).toEqual('Error :/ AxiosError: Request failed with status code 403');

});

test('Set Task done', async () => {

    const axiosInstance = instanceProvider.newAxios();
    axiosInstance.interceptors.request.use(async config => {
        config.headers.Authorization = `Bearer FakeAccessToken`;
        return config;
    });

    const messageStore = messageStoreProvider();
    const logStore = logStoreProvider();

    const wrapper = mount(MessageList, {
        global: {
            plugins: [vuetify,
                testServicePlugin(axiosInstance),
                testStorePlugin(messageStore, logStore),
                testUserManagerPlugin("alice")
            ],
        },
    });

    await wrapper.vm.$nextTick();
    await flushPromises();

    const checkedItem = wrapper.getComponent(MessageBox);

    expect(checkedItem.classes('greyed')).toBe(false);

    const checkbox = checkedItem.getComponent<typeof VCheckbox>('[data-testid="message-box-checkbox"]');
    await checkbox.setValue(true);

    await wrapper.vm.$nextTick();
    await flushPromises();

    expect(checkedItem.classes('greyed')).toBe(true);

    await checkbox.setValue(false);

    await wrapper.vm.$nextTick();
    await flushPromises();

    expect(checkedItem.classes('greyed')).toBe(false);

    expect(logStore.items).toHaveLength(2);
    expect(logStore.items[0].type).toBe("done");
    expect(logStore.items[0].message.message).toContain('Quisque et convallis eni');


    expect(logStore.items[1].type).toBe("undone");
    expect(logStore.items[0].message.message).toContain('Quisque et convallis eni');
});

test('Delete task', async () => {

    const axiosInstance = instanceProvider.newAxios();
    axiosInstance.interceptors.request.use(async config => {
        config.headers.Authorization = `Bearer FakeAccessToken`;
        return config;
    });

    const messageStore = messageStoreProvider();
    const logStore = logStoreProvider();

    const wrapper = mount(MessageList, {
        global: {
            plugins: [vuetify,
                testServicePlugin(axiosInstance),
                testStorePlugin(messageStore, logStore),
                testUserManagerPlugin("alice")
            ],
        },
    });

    await wrapper.vm.$nextTick();
    await flushPromises();

    const initialResults = wrapper.findAllComponents(MessageBox);

    const dotsButton = initialResults[0].getComponent<typeof VBtn>('[data-testid="message-box-dots"]');
    await dotsButton.trigger('click');

    await wrapper.vm.$nextTick();
    await flushPromises();

    const deleteMenu = initialResults[0].getComponent<typeof VBtn>('[data-testid="message-box-delete"]');

    await deleteMenu.trigger('click');

    await wrapper.vm.$nextTick();
    await flushPromises();

    const results = wrapper.findAllComponents(MessageBox);

    expect(results).toHaveLength(14);
    for (let i = 0; i < results.length; i++) {
        expect(results[i].html()).toEqual(initialResults[i].html());
    }

    expect(logStore.items).toHaveLength(1);
    expect(logStore.items[0].type).toBe("delete");
    expect(logStore.items[0].message.message).toContain('Duis aliquet ultrices');
});