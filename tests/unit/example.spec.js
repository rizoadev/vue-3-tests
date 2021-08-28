import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
  it('input test', async () => {
    const wrapper = shallowMount(HelloWorld)
    const textInput = wrapper.find('input[type="text"]')
    await textInput.setValue('some value')
    await wrapper.find('button').trigger('click')

    const text = wrapper.find('p')
    expect(text.text()).toContain('some value')
    expect(wrapper.find('input[type="text"]').element.value).toEqual('some value')
  })
})
