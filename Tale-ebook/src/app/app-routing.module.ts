import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { LoginRegisterComponent } from './user/login-register/login-register.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './book/store/store.component';
import { LibraryComponent } from './book/library/library.component';
import { AuthGuard } from './user/auth.guard';
import { CartComponent } from './book/cart/cart.component';

const routes: Routes = [
  { path: "userLogin", component: LoginRegisterComponent },
  {path: '', component: HomeComponent},
  { path: "store", component: StoreComponent },
  //{ path: "author", component: AuthorLoginRegisterComponent },
  { path: "library", component: LibraryComponent },
  { path: "cart", component: CartComponent },
  //{ path: "updateUser", component: UpdateUserComponent  ,canActivate: [AuthGuard]},
  //{path: "updateUserDetails" , component: UpdateUserDetailsComponent,canActivate: [AuthGuard]},
  //{path: "updatePassword" , component: UpdatePasswordComponent,canActivate: [AuthGuard]},

  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }