import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe (
            'Test recipe', 
            'desription Test', 
            'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg',
            [
                new Ingredient ("Test Ingredient", 250),
                new Ingredient ("Test Ingredient 2", 25)
            ]
            ),
        new Recipe(
            'Test recipe 1', 
            'desription Test1', 
            'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg',
            [
                new Ingredient ("Test Ingredient 4", 250),
                new Ingredient ("Test Ingredient 5", 25),
                new Ingredient ("Test Ingredient 5", 25)
            ]
            )
    ];
    
    recipeSelected: Recipe; 

    selectRecipe(recipeEle: Recipe) {
        this.recipeSelected = recipeEle
        console.log(this.recipeSelected)
    }

    getRecipes() {
        return this.recipes.slice()
    }

}

