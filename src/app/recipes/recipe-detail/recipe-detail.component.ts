import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe : Recipe;
  
  constructor(private recipeService: RecipeService) { 
    this.recipe = this.recipeService.recipeSelected
  }

  ngOnInit() {
    
  }

  ngAfterContentChecked(): void {
    this.recipe = this.recipeService.recipeSelected  
  }

}
