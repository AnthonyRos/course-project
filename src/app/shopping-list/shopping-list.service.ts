
import { Ingredient } from "../shared/ingredient.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient ("Test Ingredient", 250),
        new Ingredient ("Test Ingredient 2", 25)
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    createList(ingredientName: string, ingredientAmount: number) {
        const ingredient = new Ingredient(ingredientName, ingredientAmount)
        this.ingredients.push(ingredient)
    }

    deleteLastListItem() {
        this.ingredients.pop()
    }
    
    clearList() {
        this.ingredients = []
    }


}