import { Injectable } from '@angular/core';
import { Item } from './item';
import { WishList } from './mock-wishlist';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getWishList(): Observable<Item[]> {
    return of(WishList);
  }
}
