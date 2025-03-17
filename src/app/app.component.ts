import { Component, input } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Cards } from './Card/cards.components';

//Soit templateUrl avec url de la route ex: './Card/cards.components.html'
//Soit template avec le code html ou export
@Component({
  selector: 'app-root',
  imports: [Cards],
  template: '<cards/>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TestAngulars';
}
