import { ProdutoServerResponse } from './produto.model';

export interface CestaCompraModel {
    valorTotal: 0,
    produto: [
      {
        produto: ProdutoServerResponse,
        quantidade: 0
      }
    ]
}

export interface CestaCompraModelResponse {
    valorTotal: number;
    produto: [
        {
            codigo: number,
            quantidade: number,
        }
    ];
}
