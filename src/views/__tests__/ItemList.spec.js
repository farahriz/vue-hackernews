import { shallowMount } from '@vue/test-utils'
import ItemList from '../ItemList.vue'
import Item from '../../components/Item.vue'

describe('ItemList.vue', () => {
    test('renders an Item with data for each item in windows.items', () => {
        window.items = [{}, {}, {}]
        const wrapper = shallowMount(ItemList)
        const items = wrapper.findAll(Item)
        expect(wrapper.findAll(Item)).toHaveLength(window.items.length)
        items.wrappers.forEach((wrapper, i) => {
            expect(wrapper.props().item).toBe(winodw.items[i])
        })
    })

})