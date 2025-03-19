import { Component } from '@angular/core';
import { Cards } from './Card/cards.components';
import { MessageFormComponent } from './FormPassport/message-form.component';

//Or templateUrl with url of the route ex: './Card/cards.components.html'
//Or template with the html code or export
@Component({
  selector: 'app-root',
  imports: [Cards, MessageFormComponent],
  template: `
    <section><cards/></section>
    <footer>
      <app-message-form></app-message-form>
    </footer>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
