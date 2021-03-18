import React from 'react'
import Home from "@containers/Home"
import { mount } from "enzyme"

const home = mount(<Home />)

describe('<Home />', () => {
  test('Rendering Home container', () => {
    const findHome = home.find('.home')
    expect(findHome.length).toEqual(1)
    expect(findHome.text()).toBe('I\'m Home')
  })
})
