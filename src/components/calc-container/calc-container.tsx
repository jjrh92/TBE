import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'calc-container',
  styleUrl: 'calc-container.scss',
})
export class CalcContainer {
  @State() hasLogData: boolean = false;

  private checkLogData = () => {
    const logData = localStorage.getItem('Log'); // Change to your actual key
    this.hasLogData = !!(logData && logData.trim() !== '');
  };

  private handleLogUpdate = () => {
    this.checkLogData();
  };

  connectedCallback() {
    this.checkLogData();
    window.addEventListener('log-updated', this.handleLogUpdate);
  }

  disconnectedCallback() {
    window.removeEventListener('log-updated', this.handleLogUpdate);
  }

  render() {
    return (
      <Host>
        <div class="calc-container">
          <calc-body />
          {this.hasLogData && <calc-log />}
        </div>
      </Host>
    );
  }
}
