import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant';
import { Item } from './Item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
  

export class HappyHourService {

  private restaurantUrl:string = "https://my-json-server.typicode.com/ddrastic14/HappyHourDB/restaurants";

  private itemsUrl:string = "https://my-json-server.typicode.com/ddrastic14/HappyHourDB/items";

  constructor(private http: HttpClient) { }

  getRestaurants():Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(this.restaurantUrl);
  }

  getAllRestaurantItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getRestaurant(restaurantId: string): Promise<Restaurant> {
    return this.http.get(this.restaurantUrl + `?id=${restaurantId}`)
      .pipe(
        map(restaurantArray => restaurantArray[0]),
      )
      .toPromise();
  }

  
  getRestaurantItems(restaurantId: string): Promise<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl + `?restaurantId=${restaurantId}`)
      .toPromise();
  }
}
