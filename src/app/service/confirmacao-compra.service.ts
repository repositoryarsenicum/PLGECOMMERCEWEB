import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ConfirmacaoCompraService {

  private applicationService = environment.URL_SERVER_API;
  private produtoList: ProdutoModelResponse[] = [];

  constructor(private httpClient: HttpClient) { }

  public recuperarConfirmacaoPagamento(codigoOrdemPagamento) {
    return this.httpClient.get<ProdutoModelResponse>(this.applicationService.concat("ordempagamento").concat(`${codigoOrdemPagamento}`));
  }

}

interface ProdutoModelResponse {
  codigo: Number;
  categoria: String;
  nome: String;
  descricao: String;    
  preco: Number;
  quantidadeDisponivel: Number;
  urlImagem: String;
}