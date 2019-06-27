import { Component, OnInit,Input } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-menu-items-list',
  templateUrl: './menu-items-list.component.html',
  styleUrls: ['./menu-items-list.component.css']
})
export class MenuItemsListComponent implements OnInit {
  @Input() items: Item[];
  constructor() { }

  ngOnInit() {
  }

}
