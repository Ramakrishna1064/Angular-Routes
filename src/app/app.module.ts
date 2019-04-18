import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AppRoutingModule } from './app-routing.module';
import { BookserviceService } from './bookservice.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
