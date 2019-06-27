import { Component, OnInit } from '@angular/core';
import { HappyHourService } from '../happy-hour.service';


@Component({
  selector: 'app-restaurant-sorting',
  templateUrl: './restaurant-sorting.component.html',
  styleUrls: ['./restaurant-sorting.component.css'],
  
})


export class RestaurantSortingComponent implements OnInit  {

  public restaurants = [];

  constructor(private happyHourService:HappyHourService) { }

  ngOnInit() {
    this.happyHourService.getRestaurants().subscribe(data => this.restaurants = data);
  }

  
  }


