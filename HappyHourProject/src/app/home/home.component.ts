import { Component,OnInit } from '@angular/core';
import { HappyHourService } from '../happy-hour.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public restaurants = [];

  items: Array<any> = []

  constructor(private happyHourService:HappyHourService) { 
    this.items = [
      { name: 'assets/images/the-rec-room.jpg'}
      
      
      
    ]
  }
  ngOnInit(){
    this.happyHourService.getRestaurants().subscribe(data => this.restaurants = data);
  }

 

}
