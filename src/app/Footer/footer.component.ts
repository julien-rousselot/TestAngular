import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <a [href]="link" target="_blank">{{ network }}</a>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() network: string = 'Nom du site';
  @Input() link: string = 'Lien du site';
}
