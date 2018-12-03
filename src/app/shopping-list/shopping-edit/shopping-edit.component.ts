import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { 
    
  }

  ngOnInit() {
   
  }

  onAddIngredient() {

    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    
    if (ingredientAmount && ingredientName) {
      this.shoppingListService.createList(ingredientName, ingredientAmount)
      this.nameInputRef.nativeElement.value = "";
      this.amountInputRef.nativeElement.value = ""

    } 
  }

  onDeleteIngredient() {
    this.shoppingListService.deleteLastListItem()
  }

  onClear() {
    this.shoppingListService.clearList()
  }

}
