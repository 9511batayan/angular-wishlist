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
  wishlist: Item[];
  constructor(private location: Location,
              private itemService: ItemService) { }

  ngOnInit(): void {
  }

  registerItem(newitem: Item): void {
    // new item -> wishlist push
//    this.router.navigate([]);
    if(!newitem) return ;
    this.itemService.pushItem(newitem)
      .subscribe(item => {this.wishlist.push(newitem)});
    this.location.back();
  }
  
  goHome(): void {
    this.location.back();
  }
}
