import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Recipe } from 'D:/Angular_Tutorial/RecipeBook/src/app/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Steak', 'Using this recipe you can create steak', 'https://www.cookingclassy.com/wp-content/uploads/2019/07/steak-marinade-12-768x1152.jpg')
    , new Recipe('Rib Eye', 'Using this recipe you can create rib eye', 'https://www.onegoodthingbyjillee.com/wp-content/uploads/2018/04/tender-steak.png')
  ];


  constructor() { }
  @Output() theRecipe = new EventEmitter<Recipe>();
  ngOnInit() {
  }
  onRecipeSelect(recipe: Recipe){
    this.theRecipe.emit(recipe);
  }

}
