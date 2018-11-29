import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient ("Test Ingredient", 250),
    new Ingredient ("Test Ingredient 2", 25)
  ];

  @ViewChild(ShoppingEditComponent)
  private editComponent: ShoppingEditComponent;

  constructor() {
    setTimeout(()=> {
      console.log(this.editComponent)
    }, 2000);
    this.ingredients.push(new Ingredient("test", 250))
    
   }

  ngOnInit() {
  }

  createList({name, amount}) {
    console.log(name.value + " " + amount.value)
    this.ingredients.push(new Ingredient(name.value, amount.value))

  }

  deleteLastListItem() {
    this.ingredients.pop()
  }

}
