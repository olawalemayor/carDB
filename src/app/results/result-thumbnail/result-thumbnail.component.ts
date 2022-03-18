import { Component } from "@angular/core";
import { CarService } from "src/app/shared";
import { Icars } from "src/app/shared/car";

@Component({
    selector: 'result-thumbnail',
    templateUrl: 'result-thumbnail.component.html',
    styleUrls: ['result-thumbnail.component.css']
})

export class ResultThumbnailComponent{

    display(){
      const cars:Icars[] = this.carService.filteredCars
      return cars
    }

    year(car:Icars){
      return this.carService.SplitYear(car)
    }

    constructor(private carService:CarService){}


}
