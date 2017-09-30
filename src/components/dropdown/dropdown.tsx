import { Component, Prop, State, Method } from '@stencil/core';


@Component({
  tag: 'w-dropdown',
  styleUrl: 'dropdown.scss'
})
export class Dropdown {
  
  @Prop() 
  alignemnent: string = 'bottom';

  @State() 
  opened: boolean = false;

  @Method()
  open(){
    this.opened = true;
  }

  @Method()
  close(){
    this.opened = false;
  }

  toggle() {
    this.opened = !this.opened;
  }

  render() {
    return [
        <div aria-haspopup="true" aria-expanded="false" onClick={() => this.toggle()}>
          <slot name="trigger"></slot>
        </div>,
        <div class={`${this.opened? 'show': ''} dropdown-content`}>
          <slot></slot>
        </div>
     ];
  }
}
