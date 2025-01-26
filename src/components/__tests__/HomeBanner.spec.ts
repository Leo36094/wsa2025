import { describe, it, expect, vi } from 'vitest'

import HomeBanner from '../HomeBanner.vue';
import { mount } from '@vue/test-utils'


// Mock the useI18n function
vi.mock('vue-i18n', () => ({
  useI18n: () => ({
    t: (key: string) => key
  })
}))

describe('HomeBanner', () => {
  it('renders properly', async () => {
    const wrapper = mount(HomeBanner, {
      global: {
        mocks: {
          $t: (msg: string) => msg
        }
      }
    })
    expect(wrapper.text()).toContain('home.title')

  })
})
