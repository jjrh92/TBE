import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'calc-container',
  styleUrl: 'calc-container.scss',
  shadow: true,
})
export class CalcContainer {
  render() {
    return (
      <Host>
        <div class="calc-container">
          <calc-body>
          </calc-body>
        </div>
      </Host>
    );
  }
}
