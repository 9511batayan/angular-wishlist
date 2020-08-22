import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-display-wishlist',
  templateUrl: './display-wishlist.component.html',
  styleUrls: ['./display-wishlist.component.css']
})
export class DisplayWishlistComponent implements OnInit {
  newitem: Item={name:"",url:"http://"};
  wishList: Item[];
  selectedItem: Item;
  isOpenNewItemMenu: boolean = false;
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getWishList();
  }

  onClick(): void {
    this.isOpenNewItemMenu = true;
    this.newitem.name="";
  }

  onItemDetail(item: Item): void{
    this.selectedItem = item;
  }

  getWishList(): void {
    this.itemService.getWishList()
    .subscribe(wishList => this.wishList = wishList);
  }

  registerItem(): void {
    this.itemService.pushItem(this.newitem)
    .subscribe(newitem => {this.wishList.push(newitem);});
  }

  onClose(): void {
    this.isOpenNewItemMenu = false;
  }

  delete(item: Item): void {
    this.wishList = this.wishList.filter(h => h !== item);
    this.itemService.deleteItem(item).subscribe();
  }
}
