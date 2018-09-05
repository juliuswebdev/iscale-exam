import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartComponent } from './Cart/cart.component';
import { ContentComponent } from './content/content.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Title,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
