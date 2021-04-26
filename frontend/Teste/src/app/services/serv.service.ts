import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastros } from '../model/Model';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

import { GeoJSON } from 'geojson'

const API =' http://localhost:3000/dados';

@Injectable({
  providedIn: 'root'
})


export class servService {


  constructor(private http: HttpClient) { }

  
getAll(): Observable<Cadastros[]> {
  return this.http.get<Cadastros[]>(API);
}

getAllLogin(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(API);
}

get(id: any): Observable<Cadastros> {
  return this.http.get<Cadastros>(`${API}/${id}`);
}

create(cadastro: Cadastros): Observable<Cadastros> {
  return this.http.post<Cadastros>(API, cadastro);
}

update(id: any, cadastro: Cadastros): Observable<any> {
  return this.http.put(`${API}/${id}`, cadastro);
}

delete(id: any): Observable<any> {
  return this.http.delete(`${API}/${id}`);
}

deleteAll(): Observable<any> {
  return this.http.delete(API);
}



}

