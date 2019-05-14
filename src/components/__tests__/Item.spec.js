import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('renders item.url', () => {
    const item = {
      url:10
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.url)
  })

  test('renders item.score', () => {
    const item = {
      score: 20
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.score)
  })

  test('renders item.by', () => {
      const item = {
        by: "Marcus Aurelius" 
      }
      const wrapper = shallowMount(Item, {
        propsData: { item }
      })
      expect(wrapper.text()).toContain(item.by)
  })

  test('renders a link to the item.url with item.title as text', () => {
      const item = {
          url: "http://www.somewhere.url",
          title: "Lorem Ipsum"
      }
      const wrapper = shallowMount(Item, {
        propsData: {item}
      })
      const a = wrapper.find('a')
      expect(a.text()).toBe(item.title)
      expect(a.attributes().href).toBe(item.url)
  })
})