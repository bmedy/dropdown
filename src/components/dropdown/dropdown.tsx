import { Component, Prop, State, Method, Element, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'w-dropdown',
  styleUrl: 'dropdown.scss'
})
export class Dropdown {

  @Element()
  el: HTMLElement;

  @Event()
  onOpen: EventEmitter;
  
  @Event()
  onClose: EventEmitter;
  
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

  componentDidMount () {
    window.addEventListener('click', this._toggle);
    window.addEventListener('touchstart', this._toggle);
  }

  componentWillUnmount () {
    window.removeEventListener('click', this._toggle);
    window.removeEventListener('touchstart', this._toggle);
  }

  _toggle() {
    if(this.opened){
      this.close();
      this.onClose.emit();
    } else {
      this.open();
      this.onOpen.emit();
    }
  }

  render() {
    return [
        <div aria-haspopup="true" aria-expanded="false" onClick={() => this._toggle()}>
          <slot name="trigger"></slot>
        </div>,
        <div class={`${this.opened? 'show': ''} dropdown-content`}>
          <slot></slot>
        </div>
     ];
  }
}
