import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() addIngredient = new EventEmitter<{name: HTMLInputElement, amount: HTMLInputElement}>();
  @Output() deleteIngredient = new EventEmitter<void>()


  constructor() { 
    
  }

  ngOnInit() {
  }

  onAddIngredient(ingredientName: HTMLInputElement, ingredientAmount: HTMLInputElement) {
    console.log(ingredientName.value + " " + ingredientAmount.value);
    
    this.addIngredient.emit({name: ingredientName, amount: ingredientAmount})
  }

  onDeleteIngredient() {
    this.deleteIngredient.emit(null)
  }

}
