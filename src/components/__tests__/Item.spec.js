import {mount} from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
    test('renders "item"', () => {
        const wrapper = mount(Item)
        expect (wrapper.text()).toContain('item')
    })
})

