import { Component, h, State, Event, EventEmitter } from '@stencil/core';

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

  render() {
    return (
      <div draggable={false} class="calc-body">
        <input draggable={false} type="text" class="value" value={this.inputValue} readOnly />
        <calc-button data="C" onClick={() => this.handleClickedButton('C')} erase />
        <calc-button data="CE" onClick={() => this.handleClickedButton('CE')} />
        <calc-button data="/" onClick={() => this.handleClickedButton('/')} />
        <calc-button data="*" onClick={() => this.handleClickedButton('*')} />
        <calc-button data="7" onClick={() => this.handleClickedButton('7')} />
        <calc-button data="8" onClick={() => this.handleClickedButton('8')} />
        <calc-button data="9" onClick={() => this.handleClickedButton('9')} />
        <calc-button data="-" onClick={() => this.handleClickedButton('-')} />
        <calc-button data="4" onClick={() => this.handleClickedButton('4')} />
        <calc-button data="5" onClick={() => this.handleClickedButton('5')} />
        <calc-button data="6" onClick={() => this.handleClickedButton('6')} />
        <calc-button data="+" onClick={() => this.handleClickedButton('+')} />
        <calc-button data="1" onClick={() => this.handleClickedButton('1')} />
        <calc-button data="2" onClick={() => this.handleClickedButton('2')} />
        <calc-button data="3" onClick={() => this.handleClickedButton('3')} />
        <calc-button data="=" onClick={() => this.handleClickedButton('=')} equal />
        <calc-button data="0" onClick={() => this.handleClickedButton('0')} />
        <calc-button data="00" onClick={() => this.handleClickedButton('00')} />
        <calc-button data="." onClick={() => this.handleClickedButton('.')} />
      </div>
    );
  }
}
