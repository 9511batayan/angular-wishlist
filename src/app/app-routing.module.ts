import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayWishlistComponent } from './display-wishlist/display-wishlist.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  { path:'', redirectTo:'/wishlist', pathMatch:'full'},
  { path: 'wishlist', component: DisplayWishlistComponent},
  {path: 'detail/:id', component: ItemDetailComponent},
  { path: '**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
