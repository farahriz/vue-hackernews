import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgressBar.vue', () => {
  test('initializes with 0% width', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%') 
  })

  test('displays the bar when start is called', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
    wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('hidden')
  })

  test('sets the bar to 100% width when finish is called', () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(wrapper.element.style.width).toBe('100%')
  })

  test('hides the bar when finish is', () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(wrapper.classes()).toContain('hidden') 
  })


})
