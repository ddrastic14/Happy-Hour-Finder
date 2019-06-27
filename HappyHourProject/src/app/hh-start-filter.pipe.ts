import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hhStartFilter'
})
export class HhStartFilterPipe implements PipeTransform {

  transform(restaurants:any,term2:any): any{
    if(term2 === undefined)return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.happyHourStart.toLowerCase().includes(term2.toLowerCase());
      
  })
    }

}
