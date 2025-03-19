import { Component } from '@angular/core';
import { Cards } from './Card/cards.components';
import { MessageFormComponent } from './FormPassport/message-form.component';
import { FooterComponent } from './Footer/footer.component';

//Or templateUrl with url of the route ex: './Card/cards.components.html'
//Or template with the html code or export
@Component({
  selector: 'app-root',
  imports: [Cards, MessageFormComponent, FooterComponent],
  template: `
    <section><cards/></section>
    <div>
      <app-message-form></app-message-form>
    </div>
    <footer>
      <app-footer [network]="'The Super Site # footer reutilisable ?'" [link]="'https://www.satoris.com/fr/home'"></app-footer>
    </footer>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
