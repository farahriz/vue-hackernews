import Vue from 'vue'
import Item from '../Item.vue'

describe('Item.vue', () => {
    test('renders "item"', () => {
        const Ctor = Vue.extend(Item)
        const vm = new Ctor().$mount()
        expect (vm.$el.textContent).toContain('item')
    })
})

