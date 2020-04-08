import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Food } from '../../models/food';
import { FoodService } from '../../services/food.service'; 

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent implements OnInit {

  foods: Food[];

  newMeal: Food = {meal:"", calories:0, details:""};

  @Output() addMeal = new EventEmitter<Food>();

  submitMeal(){
    this.addMeal.emit(this.newMeal);
  }
  

  constructor(private foodservice: FoodService) { }

  ngOnInit(): void {
  }

}
