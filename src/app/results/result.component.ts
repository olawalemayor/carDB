import { Component } from "@angular/core";
import { CarService } from "../shared";
import { Icars } from "../shared/car";

@Component({
    selector: 'search-result',
    templateUrl: 'result.component.html',
    styles: []
})

export class ResultComponent{


  display(){ //nested in a method so that the filtered car is dynamic
    const car:Icars = this.carService.filteredCars[0]
    const year: string = this.carService.SplitYear(car)
    return{car,year}
  }

  constructor(private carService:CarService){}

}
