import { newSpecPage } from '@stencil/core/testing';
import { CalcContainer } from '../calc-container';

describe('calc-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CalcContainer],
      html: `<calc-container></calc-container>`,
    });
    expect(page.root).toEqualHtml(`
      <calc-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </calc-container>
    `);
  });
});
