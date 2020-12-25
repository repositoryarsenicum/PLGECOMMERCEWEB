export interface ProdutoModel {
  codigo: Number;
  nome: String;
  categoria: String;
  descricao: String;
  preco: Number;
  quantidadeDisponivel: Number;
  urlImagem: String
}

export interface ProdutoServerResponse {
  produtoList: ProdutoModel[];
}
