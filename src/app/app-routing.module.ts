import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ItemComponent} from './item/item.component';
import{CustomerComponent} from './customer/customer.component';

const routes: Routes = [  
  {path:'customer',component:CustomerComponent},
  {path:'item',component:ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
