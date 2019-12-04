import { Component, OnInit,ElementRef,ViewChild,EventEmitter } from '@angular/core';
import {Ingredient} from 'D:/Angular_Tutorial/RecipeBook/src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName',{static:false}) nameInput: ElementRef;
  @ViewChild('inputAmount',{static:false}) amountInput: ElementRef;
  ingredientAdded = new EventEmitter<Ingredient >();
  constructor() { }

 onAddItem(){
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(name,amount);
    this.ingredientAdded.emit(newIngredient);
  }
  ngOnInit() {
  }

}
