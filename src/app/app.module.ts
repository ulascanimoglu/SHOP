import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { AlertifyService } from './services/alertify.service';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormControl
  ],
  // provider a alertify.service.ts deki root ifadesini silip
  // bunu eklersek yine aynı şey (global) olacaktır. Merkezi bir şekilde
  // kontrol etmiş oluruz böylece.
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
