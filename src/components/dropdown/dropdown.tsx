import { Component, Prop, State } from '@stencil/core';


@Component({
  tag: 'w-dropdown',
  styleUrl: 'dropdown.scss'
})
export class Dropdown {

  @State() opened: boolean = true;

  /**
   * values:
   * bottom|top|left|right
   */
  @Prop() alignemnent: string = 'bottom';

  render() {
    return (
        <h1>
          dropdown works
        </h1>
    );
  }
}
