import { Component, h, State, Event, EventEmitter } from '@stencil/core';
import { buttonList } from '../calc-button/buttonList';

@Component({
  tag: 'calc-body',
  styleUrl: 'calc-body.scss',
})
export class CalcBody {
  @State() inputValue: string = "";
  @State() history: string[] = [];
  @Event() historyChanged: EventEmitter<string[]>;

  evaluateExpression(expression: string): string {
    try {
      const sanitizedExpression = expression
        .replace(/[^0-9+\-*/().]/g, '')
        .replace(/(\.\.)+/g, '.');

      if (sanitizedExpression === '') return '0';
      const result = new Function('return ' + sanitizedExpression)();

      if (typeof result === 'number' && !isNaN(result)) {
        const resultStr = result.toString();
        this.history = [...this.history, `${expression} = ${resultStr}`];
        this.historyChanged.emit(this.history);
        return resultStr;
      } else {
        return 'Syntax error 😱';
      }
    } catch {
      return 'Syntax error 😱';
    }
  }

  handleClickedButton(value: string) {
    if (value === 'C') {
      this.inputValue = '';
    } else if (value === 'CE') {
      this.inputValue = this.inputValue.slice(0, -1);
    } else if (value === '=') {
      this.inputValue = this.evaluateExpression(this.inputValue);
    } else {
      this.inputValue += value;
    }
  }

  renderButton(button) {
    return (
      <calc-button 
        data={button.data} 
        onClick={() => this.handleClickedButton(button.data)} 
        {...button.props}
      />
    );
  }

  render() {
    return (
      <div draggable={false} class="calc-body">
        <input draggable={false} type="text" class="value" value={this.inputValue} readOnly />
        {buttonList.map(button => this.renderButton(button))}
      </div>
    );
  }
}