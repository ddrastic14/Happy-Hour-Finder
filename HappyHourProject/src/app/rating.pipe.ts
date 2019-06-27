import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(restaurants:any,term5:any): any{
    if(term5 === undefined)return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.rating.toLowerCase().includes(term5.toLowerCase());
      
  })
  }
}
