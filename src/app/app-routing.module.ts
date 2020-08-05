import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayWishlistComponent } from './display-wishlist/display-wishlist.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  {path: 'wishlist', component: DisplayWishlistComponent},
  {path: 'register', component: AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
