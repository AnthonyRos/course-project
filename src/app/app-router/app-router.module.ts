import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from '../recipes/recipes.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeItemComponent } from '../recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { RecipeNullComponent } from '../recipes/recipe-detail/recipe-null/recipe-null.component';
import { RecipeDetailEditComponent } from '../recipes/recipe-detail/recipe-detail-edit/recipe-detail-edit.component';

const appRouter: Routes = [

  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeNullComponent},
    {path: 'new', component: RecipeDetailEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeDetailEditComponent}
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouter)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
