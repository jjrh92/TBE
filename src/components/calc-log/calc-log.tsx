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
        <div class="container_title">
          <span class="container_title_text">History</span>
          <div class="scroll_wrapper">
            <span class="container_text">DATA</span>
          </div>
          <span class="container_title_text">Logger</span>
        </div>
      </div>


    );
  }
}
