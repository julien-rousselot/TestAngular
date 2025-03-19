import { Component } from "@angular/core";
import { UserInfo } from "./cards";
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MessageFormComponent } from "../FormPassport/message-form.component";

@Component({
  standalone: true,
  imports: [MessageFormComponent, CommonModule, GoogleMapsModule, ],
  selector: 'cards',
  styleUrl: './cards.components.scss',
  templateUrl: './cards.components.html',
})
export class Cards {
  data: UserInfo[] = [];
  isRotated: boolean = false;
  isOpen: boolean = false;

  // Api call
  async getData() {
    const url = "https://randomuser.me/api/?results=4";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const dataFromApi = await response.json();
      this.data = dataFromApi.results;
      console.log("data from api", this.data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        console.log("hey");
      } else {
        console.error(String(error));
        console.log("hey");
      }
    }
  }

  //call the rotation animation for the passport
  //check if the passport is open or not and toggle it, call to function getData only while opening
  togglePassport() {
    this.isRotated = !this.isRotated;
    if (!this.isOpen) {
      this.getData();
    }
    this.isOpen = !this.isOpen;
  }
}
