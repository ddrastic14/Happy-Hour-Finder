import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantLocationsComponent } from './restaurant-locations/restaurant-locations.component';
import { RestaurantSortingComponent } from './restaurant-sorting/restaurant-sorting.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { HomeComponent } from './home/home.component';
import { AllMenusComponent } from './all-menus/all-menus.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'locations', component: RestaurantLocationsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sort', component: RestaurantSortingComponent },
  { path: 'sort/restaurants/:id', component: RestaurantMenuComponent },
  { path: 'sort/restaurants/:id', component: RestaurantMenuComponent },
  { path: 'home/restaurants/:id', component: RestaurantMenuComponent },
  { path: 'home/allmenus', component: AllMenusComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

