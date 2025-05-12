import { newSpecPage } from '@stencil/core/testing';
import { CalculadoraJulio } from '../calculadora-julio';

describe('calculadora-julio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CalculadoraJulio],
      html: `<calculadora-julio></calculadora-julio>`,
    });
    expect(page.root).toEqualHtml(`
      <calculadora-julio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </calculadora-julio>
    `);
  });
});
