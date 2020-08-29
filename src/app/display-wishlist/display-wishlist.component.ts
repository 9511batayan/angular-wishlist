import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-display-wishlist',
  templateUrl: './display-wishlist.component.html',
  styleUrls: ['./display-wishlist.component.css']
})
export class DisplayWishlistComponent implements OnInit {
  wishList: Item[] = [];
  isOpenNewItemMenu: boolean = false;
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getWishList();
  }

  onClick(): void {
    this.isOpenNewItemMenu = true;
  }
  
  getWishList(): void {
    this.itemService.getWishList()
    .subscribe(wishList => this.wishList = wishList);
  }

  registerItem(name:String, url:String): void {
    if(!name){return ;}
    this.itemService.pushItem({name,url} as Item)
    .subscribe(newitem => {this.wishList.push(newitem);});
    this.onClose();
  }

  onClose(): void {
    this.isOpenNewItemMenu = false;
  }

  delete(item: Item): void {
    this.wishList = this.wishList.filter(h => h !== item);
    this.itemService.deleteItem(item).subscribe();
  }
}
