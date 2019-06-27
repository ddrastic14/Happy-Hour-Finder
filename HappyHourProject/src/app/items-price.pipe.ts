import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemsPrice'
})
export class ItemsPricePipe implements PipeTransform {

  transform(restaurants:any,term8:any): any{
    if(term8 === undefined)return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.itemsPrice.toLowerCase().includes(term8.toLowerCase());
      
  })
}

}
