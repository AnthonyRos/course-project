import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  recipesVisibility: boolean = true;
  shopListVisibility: boolean = false;
  @Output() navInteraction = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }

  onToggleNav(nav: string) {
    this.navInteraction.emit(nav)
  }

}
