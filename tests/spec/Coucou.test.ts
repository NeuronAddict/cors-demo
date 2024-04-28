import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import Coucou from "../../src/components/Coucou.vue";

test('Display Coucou with name', () => {
    const wrapper = mount(Coucou,{
        props: {
            name: 'Truc'
        }
    })

    // Assert the rendered text of the component
    expect(wrapper.find('div p').text()).toEqual("Coucou Truc!")
})


test('Display Coucou with modified name', () => {
    const wrapper = mount(Coucou,{
        props: {
            name: 'Truc'
        }
    })

    wrapper.find('input#coucou_name').setValue('Machin').then(() => {
        expect(wrapper.find('div p').text()).toEqual("Coucou Machin!")
    })
})
