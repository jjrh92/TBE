import { newSpecPage } from '@stencil/core/testing';
import { CalcBody } from '../calc-body';

describe('calc-body', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CalcBody],
      html: `<calc-body></calc-body>`,
    });
    expect(page.root).toEqualHtml(`
      <calc-body>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </calc-body>
    `);
  });
});
