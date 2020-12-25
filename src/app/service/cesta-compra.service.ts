import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from './../../environments/environment.prod';
import { CestaCompraModelResponse } from './../model/cestacompra.model';
import { ConfirmacaoCompraService } from './confirmacao-compra.service';

@Injectable({
  providedIn: 'root'
})
export class CestaCompraService {

  private applicationServer = environment.URL_SERVER_API;

  private cestaCompraCliente: CestaCompraModelResponse = {
    valorTotal: 0,
    produto: [
      {
        codigo: 0,
        quantidade: 0
      }
    ] 
  };

  constructor(private httpClient: HttpClient, private produtoService: ProdutoService, private comfirmacaoCompra: ConfirmacaoCompraService) { }

}
