import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { ProdutoModel, ProdutoServerResponse } from './../../model/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public produtoList: ProdutoModel[] = [];

  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.recuperarProduto();
  }

  public recuperarProduto() {
    this.produtoService.recuperarProduto().subscribe((produtoResult: ProdutoServerResponse) => {
      this.produtoList = produtoResult.produtoList;
      console.log(this.produtoList);
    });
  }

  public selecionarProduto(codigo: Number) {
    this.produtoService.selecionarProduto(codigo);
  }

  public adicionarProduto(codigo: Number) {
    console.log("ADICIONAR PRODUTO!" + codigo);
  }

 }
