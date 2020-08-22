import { Injectable } from '@angular/core';
import { Item } from './item';
import { WishList } from './mock-wishlist';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private wishlistUrl = 'api/wishlist'; // Web APIのURL
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient) { }

  getWishList(): Observable<Item[]> {
    return this.http.get<Item[]>(this.wishlistUrl)
    .pipe(
      catchError(this.handleError<Item[]>('getWishList',[]))
    );
  }

  // 新しいアイテムを登録する
  pushItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.wishlistUrl, item, this.httpOptions).pipe(
      catchError(this.handleError<Item>('pushItem',item))
    );
  }

  /** DELETE: サーバーからアイテムを削除**/
  deleteItem(item: Item): Observable<Item> {
    return this.http.delete<Item>(this.wishlistUrl,this.httpOptions)
    .pipe(
      catchError(this.handleError<Item>('deleteItem')));
  }

  /**
 * 失敗したHttp操作を処理します。
 * アプリを持続させます。
 * @param operation - 失敗した操作の名前
 * @param result - observableな結果として返す任意の値
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    // TODO: リモート上のロギング基盤にエラーを送信する
    console.error(error); // かわりにconsoleに出力

    // TODO: ユーザーへの開示のためにエラーの変換処理を改善する
    //this.log(`${operation} failed: ${error.message}`);

    // 空の結果を返して、アプリを持続可能にする
    return of(result as T);
    };
  }
}
