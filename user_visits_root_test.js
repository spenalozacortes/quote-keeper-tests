const {assert} = require('chai');

describe('user visits root', () => {
  describe('posting a quote', () => {
    it('saves quote and metadata submitted by user', () => {
      const quote = "All types of knowledge, ultimately mean self knowledge.";
      const attributed = "Bruce Lee";
      const source = "Bruce Lee: The Lost Interview";

      browser.url('/');
      browser.setValue('textarea[id=quote]', quote);
      browser.setValue('input[id=attributed]', attributed);
      browser.setValue('input[id=source]', source);
      browser.click('input[type=submit]');

      assert.include(browser.getText('#quotes'), quote);
      assert.include(browser.getText('#quotes'), attributed);
      assert.include(browser.getText('#quotes'), source);
    });
  });
});
