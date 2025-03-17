import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Cards } from './Card/cards.components';

//Or templateUrl with url of the route ex: './Card/cards.components.html'
//Or template with the html code or export

@Component({
  selector: 'app-root',
  imports: [Cards,],
  template: '<section><cards/><section>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
