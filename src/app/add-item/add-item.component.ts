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
  item: Item={name:"",url:"http://"};
  wishList: Item[] = [];
  constructor(private location: Location,
              private itemService: ItemService) { }

  ngOnInit(): void {
  }

  registerItem(): void {                                                                                                                                                                                                                            
    if(!this.item.name){ return ;}
    this.itemService.pushItem(this.item)
      .subscribe(item => {this.wishList.push(item);
      });
  }
  
  goHome(): void {
    this.location.back();
  }
}
