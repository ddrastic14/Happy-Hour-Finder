import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HappyHourService } from '../happy-hour.service';
import { Restaurant } from '../restaurant';
import { Item } from '../Item';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {
  restaurantId: string;
  restaurant: Restaurant;
  items: Item[];

  constructor(private activeRoute: ActivatedRoute, private happyHourService:HappyHourService) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(async (data) => {
      this.restaurantId = data.id;
      this.restaurant = await this.happyHourService.getRestaurant(this.restaurantId);
      this.items = await this.happyHourService.getRestaurantItems(this.restaurantId);
    });
  }

}
