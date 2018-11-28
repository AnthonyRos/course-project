import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'desription Test', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg'),
    new Recipe('Test recipe 1', 'desription Test1', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg')
  ];


  @Output() recipeCall = new EventEmitter<Recipe>()

  constructor() { 
    console.log(this.recipes)
    console.log(this.recipes[0].name)
  }

  ngOnInit() {
  }

  onSelected(recipeEl: Recipe) {
    this.recipeCall.emit(recipeEl)
  }

}
