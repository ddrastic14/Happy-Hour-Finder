import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule} from '@agm/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RestaurantLocationsComponent } from './restaurant-locations/restaurant-locations.component';
import { RestaurantSortingComponent } from './restaurant-sorting/restaurant-sorting.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { HomeComponent } from './home/home.component';
import { HappyHourService } from './happy-hour.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { HhStartFilterPipe } from './hh-start-filter.pipe';
import { HhEndFilterPipe } from './hh-end-filter.pipe';
import { PricePipe } from './price.pipe';
import { RatingPipe } from './rating.pipe';
import { AddressPipe } from './address.pipe';
import { MenuPipe } from './menu.pipe';
import { ItemsPricePipe } from './items-price.pipe';
import { MenuItemsListComponent } from './menu-items-list/menu-items-list.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { AllMenusComponent } from './all-menus/all-menus.component';
import { AgmDirectionModule} from 'agm-direction'; // agm-direction




@NgModule({
  declarations: [
    AppComponent,
    RestaurantLocationsComponent,
    RestaurantSortingComponent,
    RestaurantMenuComponent,
    HomeComponent,
    FilterPipe,
    HhStartFilterPipe,
    HhEndFilterPipe,
    PricePipe,
    RatingPipe,
    AddressPipe,
    MenuPipe,
    ItemsPricePipe,
    MenuItemsListComponent,
    AllMenusComponent,
  
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC8LngtOZCwPHbUmg3c53fZIRqykEG8n40'
    }),
    AgmDirectionModule //agm-direction
    
  ],
  providers: [HappyHourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
