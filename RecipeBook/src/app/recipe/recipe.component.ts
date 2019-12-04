import { Component, OnInit } from '@angular/core';
import { Recipe } from 'D:/Angular_Tutorial/RecipeBook/src/app/recipe/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
