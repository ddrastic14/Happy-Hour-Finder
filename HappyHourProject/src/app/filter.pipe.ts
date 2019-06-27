import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurants:any,term:any): any{
    if(term === undefined)return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.name.toLowerCase().includes(term.toLowerCase());
      
  })
    }

}
