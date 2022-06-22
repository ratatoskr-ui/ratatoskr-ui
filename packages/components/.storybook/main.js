module.exports = {
  stories: ['../src/**/*.{story,stories}.mdx', '../src/**/*.{story,stories}.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
  webpackFinal: config => {
    config.resolve.mainFields = ['ratatoskr:src', 'main'];
    return config;
  },
};
