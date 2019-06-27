import { Component, OnInit } from '@angular/core';
import { HappyHourService } from '../happy-hour.service';

@Component({
  selector: 'app-all-menus',
  templateUrl: './all-menus.component.html',
  styleUrls: ['./all-menus.component.css']
})
export class AllMenusComponent implements OnInit {

  public items = [];



  constructor(private happyHourService:HappyHourService) { }

  ngOnInit() {
    this.happyHourService.getAllRestaurantItems().subscribe(data => this.items = data);
  }

}
