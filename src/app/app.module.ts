import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { NavComponent } from './core/components/nav/nav.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { FiltersComponent } from './shared/components/filters/filters.component';
import { ProductItemComponent } from './shared/components/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { GetEnumValuePipe } from './shared/pipes/get-enum-value.pipe'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ProductListComponent,
    FiltersComponent,
    ProductItemComponent,
    GetEnumValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
