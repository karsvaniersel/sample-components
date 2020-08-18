import { newE2EPage } from '@stencil/core/testing';

describe('sc-product', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<sc-product></sc-product>');
    const element = await page.find('sc-product');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the properties', async () => {
    const page = await newE2EPage();

    await page.setContent('<sc-product></sc-product>');
    const component = await page.find('sc-product');
    const element = await page.find('sc-product >>> div');
    expect(element.textContent).toEqual(``);

    component.setProperty('productname', 'Homemade Bread');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Homemade Bread`);
  });
});
