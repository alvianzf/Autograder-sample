const { JSDOM } = require('jsdom')

describe('HTML code', () => {
  let dom

  beforeAll(() => {
    dom = new JSDOM(`<!DOCTYPE html><html><body><div id="root"></div></body></html>`)
    global.document = dom.window.document
    global.window = dom.window
  })

  test('renders the correct title', () => {
    require('../index.js')
    expect(document.title).toBe('My Webpage')
  })
})
