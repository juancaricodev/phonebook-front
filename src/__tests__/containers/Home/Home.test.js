import React from 'react'
import Home from "@containers/Home"
import { mount } from "enzyme"

describe('<Home />', () => {
  const home = mount(<Home />)

  test('Home render', () => {
    const findHome = home.find('.home')
    expect(findHome.length).toEqual(1)
  })

  test('Home title render', () => {
    const homeTitle = home.find('.home-title')

    expect(homeTitle.length).toEqual(1)
    expect(homeTitle.text()).toBe('PhoneBook')
  })

  test('Home description render', () => {
    expect(home.find('.home-description').length).toEqual(1)
  })
})
