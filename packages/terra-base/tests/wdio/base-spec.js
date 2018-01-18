/* global $, before, browser, Terra */
const viewports = Terra.viewports('tiny', 'medium');
// Adding this rule to to bypass interface elements (like header and navigation) and quickly arrive at the main content.
const ignoredA11y = {
  bypass: { enabled: false },
};

describe('Base', () => {
  describe('Switching Locales', () => {
    before(() => browser.url('/#/tests/base-tests/switch'));
    it('Displays a default en locale message', () => {
      expect(browser.getText('#message')).to.equal('en');
    });

    it('Displays a customized en-US locale message', () => {
      browser.click('button');
      expect(browser.getText('#message')).to.equal('en-US');
    });
  });

  // NOTE: This test is designed to assume that tests won't fail on an error.  If it starts failing,
  // we can remove it and either deem that this scenario is not needed in night watch or find a
  // better solution.
  describe('No Translations Placeholder', () => {
    it('Displays a placeholder element', () => {
      browser.url('/#/tests/base-tests/no-translations-loaded');
      expect($('div').getText()).to.contain('No Translations');
    });

    it('Displays a placeholder string', () => {
      browser.url('/#/tests/base-tests/no-translations-loaded-string');
      expect($('div').getText()).to.contain('No Translations String');
    });
  });

  describe('Anchors', () => {
    beforeEach(() => browser.url('/#/tests/base-tests/anchors'));

    Terra.should.beAccessible({ viewports, rules: ignoredA11y });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-link-color': '#0065a3',
      '--terra-link-visted-color': '#0065a3',
      '--terra-link-hover-color': '#004c76',
      '--terra-link-focus-background-color': 'rgba(136, 168, 239, 0.5)',
      '--terra-link-focus-color': '#004c76',
      '--terra-link-active-color': '#004c76',
      '--terra-link-disabled-hover-color': '#909496',
    });
  });
});
