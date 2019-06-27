import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(restaurants:any,term4:any): any{
    if(term4 === undefined)return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.price.toLowerCase().includes(term4.toLowerCase());
      
  })
}

}
