import { Component } from '@angular/core';
import { NoticiasService } from './noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tela = 'inicial';
  autor = null;
  titulo = null;
  noticia = null;
  salvarNoticia = null;
  

  constructor(private service: NoticiasService){}

  telaInicial(){
    this.tela = 'inicial';
  }

  telaNoticia(n){
    this.tela = 'noticia';
    this.salvarNoticia = n;
  }

  telaPublicar(){
    this.tela = 'publicar';
  }
 
  telaCadastrar(){
    this.tela = 'cadastrar';
   
  }
 
  telaEstatistica(){
    this.tela = 'estatistica'
  }
 
  salvar() {
    this.service.salvar(this.autor, this.titulo, this.noticia);
    this.autor = null;
    this.titulo = null;
    this.noticia = null;
  }
 
}
