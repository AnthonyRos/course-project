import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Test recipe', 'desription Test', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg'),
        new Recipe('Test recipe 1', 'desription Test1', 'https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg'),
        new Recipe('Test recipe 8', 'desription Test8', 'https://static.750g.com/images/auto-427/e2cf6b454dbab8fde0a57d8fee8025ed/tartiflette.jpeg')
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

