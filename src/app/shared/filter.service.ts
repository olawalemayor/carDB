import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const { API_PORT, API_URL } = environment;
const endpoint = `${API_URL}:${API_PORT}/api`;

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
