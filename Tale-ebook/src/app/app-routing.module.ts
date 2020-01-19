import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index/index.component';
import { StoreComponent } from './store/store.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  { path: "", component: IndexComponent },
  { path: "store", component: StoreComponent },
  { path: "library", component: LibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
