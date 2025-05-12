import { Component, h } from '@stencil/core';

@Component({
  tag: 'calc-body',
  styleUrl: 'calc-body.scss',
})
export class CalcBody {
  render() {
    return (
      <div draggable={false} class="calc-body">
        <input draggable={false} type="text" class="value" readOnly />
        <calc-button data="C" erase />
        <calc-button data="CE" />
        <calc-button data="/" />
        <calc-button data="*" />
        <calc-button data="9" />
        <calc-button data="8" />
        <calc-button data="7" />
        <calc-button data="-" />
        <calc-button data="6" />
        <calc-button data="5" />
        <calc-button data="4" />
        <calc-button data="+" />
        <calc-button data="1" />
        <calc-button data="2" />
        <calc-button data="3" />
        <calc-button data="=" equal />
        <calc-button data="0" />
        <calc-button data="00" />
        <calc-button data="." />
      </div>
    );
  }
};