import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from './item';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  //constructor() { }

  createDb() {
    const wishlist = [
      {name: 'aaa', url:'http://www.aaaa'},
      {name: 'bbb', url:'http://www.bbbb'},
      {name: 'ccc', url:'http://www.cccc'},
      {name: 'ddd', url:'http://www.dddd'},
      {name: 'eee', url:'http://www.eeee'},
      {name: 'fff', url:'http://www.ffff'}
    ];
    return {wishlist};
  }
}
