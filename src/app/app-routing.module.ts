import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BookdetailComponent } from './bookdetail/bookdetail.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'bookdetails',
    component: BookdetailComponent,
    outlet: 'booklist'
  },
  {
    path: '',
    redirectTo: '/book',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
