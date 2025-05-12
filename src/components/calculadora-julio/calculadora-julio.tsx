import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'calculadora-julio',
  styleUrl: 'calculadora-julio.scss',
  shadow: true,
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
