import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  //@Output() addIngredient = new EventEmitter<{name: HTMLInputElement, amount: HTMLInputElement}>();
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @Output() deleteIngredient = new EventEmitter<void>()
  @Output() clearList = new EventEmitter<void>()
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;



  constructor() { 
    
  }

  ngOnInit() {
   
  }

  onAddIngredient() {
    console.log(this.nameInputRef.nativeElement.value);
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    
    if (ingredientAmount && ingredientName) {
      const ingredient = new Ingredient(ingredientName, ingredientAmount)
      this.addIngredient.emit(ingredient)
    }

    
    
   // ingredientAmount.value = "";
  }

  onDeleteIngredient() {
    this.deleteIngredient.emit(null)
  }

  onClear() {
    this.clearList.emit(null)
  }

}
