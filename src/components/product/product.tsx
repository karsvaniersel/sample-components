import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'sc-product',
  styleUrl: 'product.scss',
  shadow: true,
})
export class Product {

  @Prop() imagesrc?: string;

  @Prop() imagealt?: string;

  @Prop() productname?: string;

  render() {
    return (
      <Host>
        <div class="product">
          <img src={this.imagesrc} alt={this.imagealt} />
          <div class="details">
            <h2>{this.productname}</h2>
            <span>
              <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round"><path d="m5.029 10.429h10" /><path d="m10.029 15.429v-10.001" /></g></svg>
            </span>
          </div>
        </div>
      </Host>
    )
  }
}
