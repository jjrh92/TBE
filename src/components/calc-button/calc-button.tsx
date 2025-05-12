import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'calc-button',
  styleUrl: 'calc-button.scss',
  shadow: true,
})
export class CalcButton {

  @Prop() data: string;
  @Prop() equal?: boolean;
  @Prop() erase?: boolean;

  render() {

    let buttonClass = 'num';

    if (this.equal) {
      buttonClass = 'equal';
    } else if (this.erase) {
      buttonClass = 'erase';
    }

    return (
      <Host>
        <button title={this.data} class={buttonClass} data-button={this.data}>
          <i>{this.data}</i>
        </button>
      </Host>
    );
  }
}
