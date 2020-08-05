import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-display-wishlist',
  templateUrl: './display-wishlist.component.html',
  styleUrls: ['./display-wishlist.component.css']
})
export class DisplayWishlistComponent implements OnInit {

  wishList: Item[];
  selectedItem: Item;
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getWishList();
  }
/*
  addWishData(data: Item):void{
  }*/

  onClick(item: Item): void{
    this.selectedItem = item;
  }

  getWishList(): void {
    this.itemService.getWishList()
    .subscribe(wishList => this.wishList = wishList);
  }
}
