import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Components | Product | sc-product',
    decorators: [withKnobs],
};

export const Basic = () => {

    const productname = text('Product Name', 'Homemade Bread');
    const image = text('Product Image', 'https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80');
    const alt = text('Product Image Alt', 'Image')

    const html = `<div style="max-width: 250px;"><sc-product productname="${productname}" imagesrc="${image}" altsrc="${alt}"'></sc-product></div>`;
    return html;
};