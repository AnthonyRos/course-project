import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';
//coucou
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

//que la force soit avec toi 

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
  }

  /* onSelected(recipeEl: Recipe) {
    this.recipeService.selectRecipe(recipeEl)
  } */

}
