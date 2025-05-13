import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'calc-container',
  styleUrl: 'calc-container.scss',
})
export class CalcContainer {
  @State() history: string[] = [];
  handleHistoryChanged(event: CustomEvent) {
    this.history = event.detail;
  }

  render() {
    return (
      <Host>
        <div class="calc-container">
          <calc-body onHistoryChanged={(event) => this.handleHistoryChanged(event)} />
          {this.history.length > 0 && <calc-log history={this.history} />}
          {this.history.length > 0 && <button class="reload" title='Reload/Reniciar' onClick={() => {window.location.reload()}}>🔄</button>}
        </div>
      </Host>
    );
  }
}
