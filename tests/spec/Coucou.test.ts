import {config, mount} from '@vue/test-utils'
import { expect, test } from 'vitest'
import Coucou from "../../src/components/Coucou.vue"
import vuetify from "../../src/plugins/vuetify";

// https://vuetifyjs.com/en/getting-started/unit-testing/#setup-vitest
global.ResizeObserver = require('resize-observer-polyfill')

const wrapper = mount(Coucou,{
    props: {
        name: 'Truc'
    },
    global: {
        components: {
            Coucou,
        },
        plugins: [vuetify],
    }
})

test('Display Coucou with name', () => {
    expect(wrapper.find('div p').text()).toEqual("Coucou Truc!")
})


test('Display Coucou with modified name', () => {
    wrapper.find('input#coucou_name').setValue('Machin').then(() => {
        expect(wrapper.find('div p').text()).toEqual("Coucou Machin!")
    })
})
