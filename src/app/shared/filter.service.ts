import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FilterService {
  getFilterMakes(): Observable<string[]> {
    return this._http.get<string[]>(`${endpoint}/filter-makes`);
  }

  getFilterModels(make: string): Observable<string[]> {
    return this._http.get<string[]>(`${endpoint}/${make}/model`);
  }

  getFilteredYears(make: string, model: string): Observable<string[]> {
    return this._http.get<string[]>(`${endpoint}/${make}/${model}/year`);
  }

  constructor(private _http: HttpClient) {}
}

const endpoint = 'http://localhost:9000/api';
