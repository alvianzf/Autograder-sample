const chai = require('chai');
const expect = chai.expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

describe('HTML tests', function() {
  let dom;

  before(function(done) {
    JSDOM.fromFile('index.html').then(function(domObj) {
      dom = domObj;
      done();
    });
  });

  it('should have a title element', function() {
    const title = dom.window.document.querySelector('title');
    expect(title).to.exist;
  });
});
