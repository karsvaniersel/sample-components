import { addParameters, addDecorator, configure } from '@storybook/html';

const newViewports = {
    desktopLarge: {
        name: 'Desktop Large',
        styles: {
            width: '1920px',
            height: '963px',
        },
    },
    desktop: {
        name: 'Desktop',
        styles: {
            width: '1280px',
            height: '801px',
        },
    },
    ipad: {
        name: 'iPad',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
    iphone: {
        name: 'iPhone 6/7/8',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
};

addParameters({
    options: {
        showPanel: true,
        storySort: (a, b) => a[1].id.localeCompare(b[1].id)
    },
    viewport: {
        viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
        defaultViewport: 'responsive',
    }
})

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);