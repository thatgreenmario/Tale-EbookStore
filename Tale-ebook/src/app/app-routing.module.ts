import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index/index.component';
import { StoreComponent } from './store/store.component';
import { LibraryComponent } from './library/library.component';
import { CartComponent } from './cart/cart.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UpdatePasswordComponent } from './user/update-password/update-password.component';
import { UpdateUserDetailsComponent } from './user/update-user-details/update-user-details.component';

const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "store", component: StoreComponent },
  { path: "library", component: LibraryComponent },
  { path: "cart", component: CartComponent },
  { path: "updateUser", component: UpdateUserComponent },
  {path: "updateUserDetails" , component: UpdateUserDetailsComponent},
  {path: "updatePassword" , component: UpdatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }