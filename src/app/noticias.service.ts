import { Injectable } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  lista = [];
  autores = [{ nome: 'João', noticia: 0 },
  { nome: 'Ana', noticia: 0 },
  { nome: 'Brenda', noticia: 0 },
  { nome: 'Samuel', noticia: 0 },
  { nome: 'Dany', noticia: 0 },
  { nome: 'Tulio', noticia: 0 },
  { nome: 'Tânia', noticia: 0 }];

  constructor() {

    if (localStorage.getItem('lista')) {
      this.lista = JSON.parse(localStorage.getItem('lista'));
    }
  }

  listaDeAutores() {
    return this.autores;
  }

  todasNoticias() {
    return this.lista;
  }

  salvar(autor: string, titulo: string, noticia: string) {

    const pessoa = {
      autor,
      titulo,
      noticia,
      publicar: null
    };
    this.lista.push(pessoa);
    localStorage.setItem("lista", JSON.stringify(this.lista));
  }

  getFromLocalStorage(key: string) {
    try {
      return JSON.parse(localStorage.getItem('lista'));
    } catch (e) {
      console.error('Erro ao obter dados do Local Storage!', e);
      return null;
    }
  }

  publicadas(noticia) {
    noticia.publicar = true;
    this.noticiasPorAutor(noticia.autor);
  }

  mostrar(noticia) {
    noticia.visivel = true;
    noticia.views++;
  }

  
  noticiasPorAutor(nome) {

    for (const autor of this.autores) {
      if (autor.nome === nome) {
        autor.noticia++;
      }
    }
  }

  autorMaisPublicou() {
    let nomeMaisPublicou = {nome: null, noticia: 0};
    for(const autor of this.autores){
        if(autor.noticia > nomeMaisPublicou.noticia){
          nomeMaisPublicou = autor;
        }
    }
    return nomeMaisPublicou;
  }

  rankingNoticias() {
    return this.lista.sort(function(a,b){return b.views-a.views});
  }
}
