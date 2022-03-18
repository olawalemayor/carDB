import { Component, Input, OnInit } from '@angular/core';
import { CarService } from '../shared';
import { Icars } from '../shared/car';
import { FilterService } from '../shared/filter.service';

@Component({
  selector: 'car-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() cars: Icars[]; //from wrapper
  makes: string[] = [];
  model: string[] = [];
  year: string[] = [];

  sortMake: () => void;

  sortModel: () => void;

  search() {
    const makeSelect = document.getElementById('make') as HTMLSelectElement;
    const modelSelect = document.getElementById('model') as HTMLSelectElement;
    const yearSelect = document.getElementById('year') as HTMLSelectElement;
    if (makeSelect.value && modelSelect.value && yearSelect.value)
      //update the filtered car value
      this.carService.updateFilteredCars(
        makeSelect.value,
        modelSelect.value,
        yearSelect.value
      );
  }

  constructor(
    private carService: CarService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    const makeSelect = document.getElementById('make') as HTMLSelectElement;
    const modelSelect = document.getElementById('model') as HTMLSelectElement;
    const yearSelect = document.getElementById('year') as HTMLSelectElement;

    this.filterService.getFilterMakes().subscribe((makes) => {
      this.makes = makes;
    });

    this.sortMake = () => {
      this.filterService
        .getFilterModels(makeSelect.value)
        .subscribe((models) => {
          this.model = models;
        });
      yearSelect.value = '';
    };

    this.sortModel = () => {
      this.filterService
        .getFilteredYears(makeSelect.value, modelSelect.value)
        .subscribe((years) => {
          this.year = years;
        });
    };
  }
}
