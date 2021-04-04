import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductModelComponent } from './add-product-model/add-product-model.component';
import { AddProductTemplateComponent } from './add-product-template/add-product-template.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path:'products', component: ProductsComponent},
  {path:'add-product-template', component: AddProductTemplateComponent},
  {path:'add-product-model', component: AddProductModelComponent},
  {path:'', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
