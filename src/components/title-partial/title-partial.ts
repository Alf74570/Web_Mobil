import { Component } from '@angular/core';

/**
 * Generated class for the TitlePartialComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'title-partial',
  templateUrl: 'title-partial.html'
})
export class TitlePartialComponent {

  text: string;

  constructor() {
    console.log('Hello TitlePartialComponent Component');
    this.text = 'Hello World';
  }

}
