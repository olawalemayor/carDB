import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Icars } from './car';
import { environment } from '../../environments/environment';

const { API_URL, API_PORT } = environment;

@Injectable()
export class CarService {
  endpoint = `${API_URL}:${API_PORT}/api`;

  filteredCars: Icars[]; //filterd car

  constructor(private http: HttpClient) {}

  //update filter car
  updateFilteredCars(make: string, model: string, year: string) {
    this.http
      .get<Icars[]>(`${this.endpoint}/${make}/${model}/${year}`)
      .subscribe((filteredCar) => {
        this.filteredCars = filteredCar;
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private handleError<T>(operation = 'operation', result?: T) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  //Useful utility for getting car year from database URL
  SplitYear(car: Icars) {
    return car.url.substring(car.url.length - 9, car.url.length - 5);
  }
}
