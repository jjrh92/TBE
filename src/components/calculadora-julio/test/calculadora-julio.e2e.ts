import { newE2EPage } from '@stencil/core/testing';

describe('calculadora-julio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<calculadora-julio></calculadora-julio>');

    const element = await page.find('calculadora-julio');
    expect(element).toHaveClass('hydrated');
  });
});
