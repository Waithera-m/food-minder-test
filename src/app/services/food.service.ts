import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { foods } from '../sampleFooods';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getFoods(){
    return foods
  }

  constructor() { }
}
