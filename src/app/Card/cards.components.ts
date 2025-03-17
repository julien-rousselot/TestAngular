import { Component } from "@angular/core";
import { UserInfo } from "./cards";

@Component({
  selector: 'cards',
  styleUrl: './cards.components.scss',
  templateUrl: './cards.components.html',
})
export class Cards {
  title = 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  data: UserInfo[] = [];

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
}
