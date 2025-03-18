import { Component } from "@angular/core";
import { UserInfo } from "./cards";
// import { NgClass } from '@angular/common';
import { CommonModule } from '@angular/common'; // ✅ Import de CommonModule

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'cards',
  styleUrl: './cards.components.scss',
  templateUrl: './cards.components.html',
})
export class Cards {
  data: UserInfo[] = [];
  isRotated = false;
  isOpen = false;

  // Api call
  async getData() {
    const url = "https://randomuser.me/api/";
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

  activePage() {
    this.isRotated = !this.isRotated;
    this.isOpen = !this.isOpen;
  }
}
