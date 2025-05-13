import { Component, h } from '@stencil/core';

@Component({
  tag: 'calc-log',
  styleUrl: 'calc-log.scss',
  shadow: true,
})
export class CalcLog {
  render() {
    return (

      <div class="container">
        <span class="container_title">History/Log</span>
        <span class="container_text">DATA</span>
      </div>

    );
  }
}
