import { newSpecPage } from '@stencil/core/testing';
import { CalcButton } from '../calc-button';

describe('calc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CalcButton],
      html: `<calc-button></calc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <calc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </calc-button>
    `);
  });
});
