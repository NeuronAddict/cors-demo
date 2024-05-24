// https://vuetifyjs.com/en/getting-started/unit-testing/#setup-vitest
import {flushPromises, mount} from "@vue/test-utils";
import MessageList from "../../src/components/messages/MessageList.vue";
import vuetify from "../../src/plugins/vuetify";
import {expect, test} from "vitest";
import {mockMessages} from "../../src/mocks/handlers";

global.ResizeObserver = require('resize-observer-polyfill')


test('List Messages', async () => {

    const wrapper = mount(MessageList, {
        global: {
            plugins: [vuetify],
        }
    });

    await wrapper.vm.$nextTick();
    await flushPromises();

    let findAll = wrapper.findAll('[data-testid=message-box-item]');
    expect(findAll).toHaveLength(15);

    let i = 0;
    [...findAll].reverse().forEach(messageBox => {
        expect(messageBox.find('[data-testid="message-box-item-message"]').text().trim()).toEqual(mockMessages[i].message);
        expect(messageBox.find('[data-testid="message-box-item-author"]').text().trim()).toContain(' ' + mockMessages[i].dueDate);
        i++;
    });
});

