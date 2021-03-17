const text = 'Hello world'

test('It must contain some text', () => {
  expect(text).toMatch(/world/)
})
