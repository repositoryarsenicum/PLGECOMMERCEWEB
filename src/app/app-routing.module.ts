import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ConfirmacaocompraComponent } from './component/confirmacaocompra/confirmacaocompra.component';
import { HomeComponent } from './component/home/home.component';
import { ProdutoComponent } from './component/produto/produto.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "produto/:codigo", 
    component: ProdutoComponent
  },
  {
    path: "cart", 
    component: CartComponent
  },
  {
    path: "checkout", 
    component: CheckoutComponent
  },
  {
    path: "confirmacao", 
    component: ConfirmacaocompraComponent
  },
  {
    path: "produto/categoria/:codigo",
    component: ConfirmacaocompraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
