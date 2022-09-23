import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ShowItmComponent } from './item/show-itm/show-itm.component';
import { AddEditItmComponent } from './item/add-edit-itm/add-edit-itm.component';
import { CustomerComponent } from './customer/customer.component';
import { ShowCustComponent } from './customer/show-cust/show-cust.component';
import { AddEditCustComponent } from './customer/add-edit-cust/add-edit-cust.component';
import{SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ShowItmComponent,
    AddEditItmComponent,
    CustomerComponent,
    ShowCustComponent,
    AddEditCustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
