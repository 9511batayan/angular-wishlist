import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  addItem(): void {

  }

  registerItem(item: Item): void {
    // new item -> wishlist push
//    this.router.navigate([]);
  }
  
  goHome(): void {
    this.location.back();
  }
}
