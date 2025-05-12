import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'calculadora-julio',
})
export class CalculadoraJulio {

  render() {
    return (
      <Host>
        <calc-container>
        </calc-container>
      </Host>
    );
  }
}
