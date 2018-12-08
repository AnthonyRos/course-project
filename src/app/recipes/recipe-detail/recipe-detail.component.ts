import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: string;

  constructor(private recipeService: RecipeService,
              private slService: ShoppingListService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.selectRecipe(+params['id']);
        this.id = params['id'];
      }
    );
  }

  /* ngAfterContentChecked(): void {
    this.recipe = this.recipeService.recipeSelected;
  } */

  onAddToShoppingList() {
    this.recipe.ingredients.forEach(element => {
      this.slService.createList(element.name, element.amount);
    });
  }

}
