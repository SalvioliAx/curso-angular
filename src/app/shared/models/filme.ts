import { Data } from '@angular/router'

export interface Filme {

  id?: Number;
  titulo: String;
  urlFoto?: String;
  dtLancamento: Date;
  descricao: String;
  nota: Number;
  urlIMDb?: String;
  genero: String;

}
