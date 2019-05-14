import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgressBar.vue', () => {
    test('is hidden on initial render', () => {
        const wrapper = shallowMount(ProgressBar)
        expect(wrapper.classes()).toContain('hidden')
    })
})