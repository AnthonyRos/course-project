import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  
  selectedRecipe : Recipe;
 
  constructor(private recipeService: RecipeService) { 
  
  }

  ngOnInit() {
    
  }

  ngAfterContentChecked(): void {
    console.log('ok')
    this.selectedRecipe = this.recipeService.recipeSelected
    
  }

}
