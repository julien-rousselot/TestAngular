import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-message-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GoogleMapsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label>
        Email: (Pour vous répondre)
        <input type="email" [formControl]="emailControl">
      </label>
      <br>
      <label>
        Message: (Les raisons du voyage)
        <textarea [formControl]="messageControl" rows="4" cols="50"></textarea>
      </label>
      <br>
      <span *ngIf="error" class="error">
        {{ error }}
      </span>
      <span *ngIf="success" class="success">
        {{ success }}
      </span>
      <button type="submit">Envoyer</button>
    </form>
      <div class="map">
        <google-map [height]="'30vh'" [width]="'100%'"></google-map>
      </div>
  `,
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent {
  private formBuilder = inject(FormBuilder)
  emailControl = new FormControl<string>('', { validators:[Validators.required, Validators.email], nonNullable: true })
  messageControl = new FormControl<string>('', { validators:[Validators.required, Validators.maxLength(254)], nonNullable: true })
  error = "";
  success = "";

  form = this.formBuilder.group({
    email: this.emailControl,
    message: this.messageControl,
  });

  // Function to submit the form with data validation, and setup the success/error messages
  onSubmit() {
    if (this.form.valid) {
      this.success = "Message envoyé avec succès !";
      this.error = "";
      this.form.reset();
    } else {
      this.success = "";
      if (this.emailControl.hasError('required')) {
        this.error = "Votre Email est requis";
      } else if (this.emailControl.hasError('email')) {
        this.error = "Veuillez entrer un Email valide";
      } else if (this.messageControl.hasError('required')) {
        this.error = "Un message est requis";
      } else if (this.messageControl.hasError('maxlength')) {
        this.error = "Votre message ne peut pas dépasser 254 caractères";
      } else {
        this.error = "Veuillez remplir tous les champs.";
      }
    }
  }
}
