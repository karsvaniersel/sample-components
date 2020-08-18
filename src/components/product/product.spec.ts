import { newSpecPage } from '@stencil/core/testing';
import { Product } from './product';

describe('sc-product', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Product],
      html: '<sc-product></sc-product>',
    });
    expect(root).toEqualHtml(`
      <sc-product>
        <mock:shadow-root>
          <div class="product">
            <img>
            <div class="details">
              <h2></h2>
              <span><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round"><path d="m5.029 10.429h10"></path><path d="m10.029 15.429v-10.001"></path></g></svg></span>
            </div>
          </div>
        </mock:shadow-root>
      </sc-product>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [Product],
      html: `<sc-product productname="Product 1" imagesrc="https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" imagealt="Image Alt"></sc-product>`,
    });
    expect(root).toEqualHtml(`
    <sc-product productname="Product 1" imagesrc="https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" imagealt="Image Alt">
        <mock:shadow-root>
        <div class="product">
          <img src="https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80" alt="Image Alt">
          <div class="details">
            <h2>Product 1</h2>
            <span><svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round"><path d="m5.029 10.429h10"></path><path d="m10.029 15.429v-10.001"></path></g></svg></span>
          </div>
        </div>
        </mock:shadow-root>
      </sc-product>
    `);
  });
});
