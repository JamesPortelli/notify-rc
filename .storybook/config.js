import React, { StrictMode } from 'react';
import { addParameters, addDecorator, configure } from '@storybook/react';
import { create } from '@storybook/theming';

addParameters({
  options: {
    showPanel: false,
    theme: create({
      base: 'dark',
      appBg: '#3f3f42',
      appContentBg: '#f2f2f2',
      appBorderRadius: '0 0 3px 3px',
      barTextColor: '#fff',
      barBg: '#3f3f42',
      brandTitle: 'notify-rc'
    })
  }
});

addDecorator(function(render) {
  return React.createElement(StrictMode, null, render());
});

function loadStories() {
  require('../stories/index.ts');
}

configure(loadStories, module);
