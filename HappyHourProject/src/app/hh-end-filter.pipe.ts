import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hhEndFilter'
})
export class HhEndFilterPipe implements PipeTransform {

  transform(restaurants:any,term3:any): any{
    if(term3 === undefined)return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.happyHourEnd.toLowerCase().includes(term3.toLowerCase());
    })
  }

}
