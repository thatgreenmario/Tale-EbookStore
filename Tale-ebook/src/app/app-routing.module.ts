import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginRegisterComponent } from './user/login-register/login-register.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './book/store/store.component';
import { LibraryComponent } from './book/library/library.component';
import { AuthGuard } from './user/auth.guard';
import { CartComponent } from './book/cart/cart.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { PrevOrdersComponent } from './user/prev-orders/prev-orders.component';
import { AuthorComponent } from './author/author.component';
import { WishlistComponent } from './book/wishlist/wishlist.component';
import { DescribelistComponent } from './book/store/describelist/describelist.component';

const routes: Routes = [
  { path: "userLogin", component: LoginRegisterComponent },
  { path: "describe", component: DescribelistComponent},
  
  {path: '', component: HomeComponent},
  { path: "store", component: StoreComponent },
  { path: "editUserProfile", component: EditProfileComponent, canActivate: [AuthGuard]},
  { path: "author", component: AuthorComponent },
  { path: "library", component: LibraryComponent ,canActivate: [AuthGuard]},
  { path: "cart", component: CartComponent, canActivate: [AuthGuard]},
  { path: "prevOrders", component: PrevOrdersComponent  ,canActivate: [AuthGuard]},
  { path: "wishlist", component: WishlistComponent, canActivate: [AuthGuard]},
  
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }