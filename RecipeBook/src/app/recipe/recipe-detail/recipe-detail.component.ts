import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'D:/Angular_Tutorial/RecipeBook/src/app/recipe/recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipeDetail: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
