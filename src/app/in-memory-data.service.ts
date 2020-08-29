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
      {id:1, name: 'Augularアプリケーションプログラミング', url:'https://www.amazon.co.jp/Angular%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E5%B1%B1%E7%94%B0-%E7%A5%A5%E5%AF%9B-ebook/dp/B074M54GM5'},
      {id:2, name: 'リーダブルコード', url:'https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89-%E2%80%95%E3%82%88%E3%82%8A%E8%89%AF%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%9F%E3%82%81%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%A7%E5%AE%9F%E8%B7%B5%E7%9A%84%E3%81%AA%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-Theory-practice-Boswell/dp/4873115655/ref=bmx_3/356-9085470-8634657?_encoding=UTF8&pd_rd_i=4873115655&pd_rd_r=73d67c8f-f95d-4e1a-8e99-80073916e6a9&pd_rd_w=pVkK6&pd_rd_wg=reKIZ&pf_rd_p=911a6ea1-c3a8-407d-a8ac-8cf6660ea77e&pf_rd_r=FZJ6F54BX9SSEPGSFAS2&psc=1&refRID=FZJ6F54BX9SSEPGSFAS2'},
      {id:3, name: 'オブジェクト指向UIデザイン', url:'https://www.amazon.co.jp/%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91UI%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E2%94%80%E2%94%80%E4%BD%BF%E3%81%84%E3%82%84%E3%81%99%E3%81%84%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%AE%E5%8E%9F%E7%90%86-WEB-DB-PRESS-plus-ebook/dp/B0893RK6WC/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E6%8C%87%E5%90%91+UI&qid=1598110859&s=books&sr=1-1'},
      {id:4, name: 'ゲーミングPC', url:'https://www.lenovo.com/jp/ja/jpad/desktops/legion-desktops/legion-t-series/Lenovo-Legion-T730-28ICO/p/90JF00HHJM?ef_id=EAIaIQobChMIxOie-5Ov6wIVSK6WCh35jALrEAQYAiABEgKNCfD_BwE:G:s&s_kwcid=AL!736!3!331691063463!!!u!294573402136!&cid=jp:sem:100005_TFSM1Q12YF&gclid=EAIaIQobChMIxOie-5Ov6wIVSK6WCh35jALrEAQYAiABEgKNCfD_BwE'},
      {id:5, name: 'fallguys', url:'https://store.steampowered.com/app/1097150/Fall_Guys_Ultimate_Knockout/'},
      {id:6, name: 'ザバス', url:'https://lohaco.jp/product/9596823/?int_id=search_keywordsearch'}
  ];
    return {wishlist};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(wishlist: Item[]): number {
    return wishlist.length > 0 ? Math.max(...wishlist.map(item => item.id)) + 1 : 1;
  }
}
