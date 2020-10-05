import define from './../define-custom-element/index.js';
import './../@vandeurenglenn/flex-elements/src/flex-one.js'

export default define(class IonHeader extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = this.template;
  }
  
  get template() {
    return `
    <style>
      :host {
        --ion-header-background: #fff;
        --ion-header-height: 54px;
        --ion-header-width: 100%;
        
        display: flex;
        flex-direction: row;
        
        width: var(--ion-header-width);
        height: var(--ion-header-height);
        background: var(--ion-header-background);
        box-shadow: 0 2px #eee;
      }
    </style>
    <slot name="left"></slot>
    <flex-one></flex-one>
    <slot name="middle"></slot>
    <flex-one></flex-one>
    <slot name="right"></slot>
    `;
  }
})