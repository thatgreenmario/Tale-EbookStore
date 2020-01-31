import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginRegisterComponent } from './user/login-register/login-register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StoreComponent } from './book/store/store.component';
import { LibraryComponent } from './book/library/library.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './book/cart/cart.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { PrevOrdersComponent } from './user/prev-orders/prev-orders.component';
import { AuthorComponent } from './author/author.component';
import { AuthorModule } from './author/author.module';
import { WishlistComponent } from './book/wishlist/wishlist.component';
import { DescribelistComponent } from './book/store/describelist/describelist.component';
import { PaymentGatewayComponent } from './book/payment-gateway/payment-gateway.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ThankYouComponent } from './book/payment-gateway/thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginRegisterComponent,
    HomeComponent,
    FooterComponent,
    StoreComponent,
    LibraryComponent,
    CartComponent,
    EditProfileComponent,
    PrevOrdersComponent,
    AuthorComponent,
    WishlistComponent,
    DescribelistComponent,
    PaymentGatewayComponent,
    DashboardComponent,
    ThankYouComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    FormsModule,
    AuthorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
