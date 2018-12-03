import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  recipesVisibility: boolean = true;
  shopListVisibility: boolean = false;
  
  onToggleNav(nav: string) {
    if (nav === 'recipes') {
      this.recipesVisibility = true;
      this.shopListVisibility = false;
    } else {
      this.recipesVisibility = false;
      this.shopListVisibility = true;
    }
  }

}
