import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgressBar.vue', () => {
  test('displays the bar when start is called', () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('hidden') 
  })

  test('initializes with 0% width', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%') 
  })
})
