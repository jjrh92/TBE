import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'calc-log',
  styleUrl: 'calc-log.scss',
})
export class CalcLog {
  @Prop() history: string[];
  render() {
    return (

      <div class="container">
        <div class="container_title">
          <span class="container_title_text">History</span>
          <div class="scroll_wrapper">
            <span class="container_text">
              {this.history.map(entry => (
              <span title={entry}>{entry}, </span>
            ))}</span>
          </div>
          <span class="container_title_text">Logger</span>
        </div>
      </div>
    );
  }
}
