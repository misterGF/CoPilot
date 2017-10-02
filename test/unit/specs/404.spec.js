import Vue from 'vue'
import c404 from '@/components/404.vue'

describe('404.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(c404)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('You are lost.')
  })
})
