import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menu'
})
export class MenuPipe implements PipeTransform {

  transform(restaurants:any,term7:any): any{
    if(term7 === undefined)return restaurants;
    return restaurants.filter(function(restaurant){
      return restaurant.menuItems.toLowerCase().includes(term7.toLowerCase());
      
  })
}

}
