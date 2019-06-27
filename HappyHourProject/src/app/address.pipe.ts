import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  transform(restaurants:any,term6:any): any{
    if(term6 === undefined)return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.address.includes(term6);
      
  })
}

}
