import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private ApplicationService = environment.URL_SERVER_API;

  constructor(private httpClient: HttpClient, private router: Router) { }

  public recuperarProduto() {
    return this.httpClient.get(this.ApplicationService.concat("produto"));
  }

  public selecionarProduto(codigo: Number) {
    return this.router.navigate(["/produto", codigo]).then();
  }

  public recuperarProdutoCodigo(codigo: Number): Observable<ProdutoService> {
    return this.httpClient.get<ProdutoService>(this.ApplicationService.concat("produto/").concat(`${codigo}`));
  }

  public recuperarProdutoCategoria(codigoCategoria: Number) : Observable<ProdutoService> {
    return this.httpClient.get<ProdutoService>(this.ApplicationService.concat("produto/categoria/:codigo").concat(`${codigoCategoria}`));
  }

}
