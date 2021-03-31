describe('<NumbersFiltered />', () => {
  const filteredData = [
    {
      name: 'Arto Hellas',
      number: '040-123456',
      id: 1,
      deleted: false
    }
  ]
  const numbersFiltered = mount(<NumbersFiltered filteredData={filteredData} />)

  test('Title render', () => {
    expect(numbersFiltered.find('h3').text().toLowerCase()).toMatch(/filtered/)
  })

  test('li render according to data quantity', () => {
    expect(numbersFiltered.find('ul').children('li')).toHaveLength(filteredData.length)
  })
})