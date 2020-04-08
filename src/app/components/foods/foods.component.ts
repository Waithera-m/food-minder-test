import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foods: Food[];
  food: Food;

  selectedFood: Food;

  //allow users to modify selected meals' details
  onSelect(food: Food): void {
    this.selectedFood =food;
  }

  //only show foods whose caloric content exceed 500
  highCalorieShow(){
    for(let i=0; i < this.foods.length; i++){
      console.log(this.foods[i].calories)
      if(this.foods[i].calories > 600){
        console.log(this.foods);
      }

    }
  }

  //add new meal to array
  addNewMeal(food){
    this.foods.push(food)
  }

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getFoods()
  }

}
