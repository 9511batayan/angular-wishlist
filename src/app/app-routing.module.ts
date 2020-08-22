import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayWishlistComponent } from './display-wishlist/display-wishlist.component';
import { AddItemComponent } from './add-item/add-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/wishlist', pathMatch: 'full' },
  {path: 'wishlist', component: DisplayWishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
