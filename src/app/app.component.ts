import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import Clarity from '@microsoft/clarity';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-analytics';

  projectId = "uxqdz7zd9q";
  constructor() {
    Clarity.init(this.projectId);

    let userId = this.generateUniqueUserId();
    (<any>window)['userId'] = userId;
    Clarity.identify(userId); // only custom-id is required
  }

  generateUniqueUserId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const array = new Uint8Array(5);
    crypto.getRandomValues(array);
    
    let userId = '';
    for (let i = 0; i < 5; i++) {
        userId += characters[array[i] % characters.length];
    }
    
    return userId;
  } 

}
