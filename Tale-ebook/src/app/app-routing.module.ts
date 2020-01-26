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

const routes: Routes = [
  { path: "userLogin", component: LoginRegisterComponent },
  {path: '', component: HomeComponent},
  { path: "store", component: StoreComponent },
  { path: "editUserProfile", component: EditProfileComponent },
  //{ path: "author", component: AuthorLoginRegisterComponent },
  { path: "library", component: LibraryComponent ,canActivate: [AuthGuard]},
  { path: "cart", component: CartComponent },
  { path: "prevOrders", component: PrevOrdersComponent  },

  
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }