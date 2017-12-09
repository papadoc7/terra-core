import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

// addon-info
setDefaults({
  header: false,
  inline: true,
});

// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'Terra Core',
  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: '#',
  /**
   * show story component as full screen
   * @type {Boolean}
   */
  goFullScreen: false,
  /**
   * display left panel that shows a list of stories
   * @type {Boolean}
   */
  showLeftPanel: true,
  /**
   * display horizontal panel that displays addon configurations
   * @type {Boolean}
   */
  showDownPanel: true,
  /**
   * display floating search box to search through stories
   * @type {Boolean}
   */
  showSearchBox: false,
  /**
   * show horizontal addons panel as a vertical panel on the right
   * @type {Boolean}
   */
  downPanelInRight: false,
  /**
   * sorts stories
   * @type {Boolean}
   */
  sortStoriesByKind: true,
});

const styles = {
  padding: 20
};

const Padding = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(Padding);

// automatically import all files ending in *.stories.js
const req = require.context('../packages/terra-site/stories', true, /.stories.jsx$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// Autoload stories via glob pattern
// function loadStories() {
//   require('glob-loader!./stories.pattern')
// }

configure(loadStories, module);
