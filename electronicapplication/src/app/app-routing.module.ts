import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component : ProductsComponent},
  {path: 'products', component : ProductsComponent},
  {path: 'add-product-model', component : AddProductModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
