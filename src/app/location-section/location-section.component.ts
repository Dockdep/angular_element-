import { Component, OnInit, ViewChildren, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { FilterData } from '../models/request';
import TaxonomyCountry from '../models/taxonomy-country';

@Component({
    selector: '[app-location-section]',
    templateUrl: './location-section.component.html',
    styleUrls: ['./location-section.component.scss']
})
export class LocationSectionComponent implements OnInit {
    @Input() data: FilterData[];
    selectedItems = [];
    myControl = new FormControl();
    options: TaxonomyCountry[];
    filteredOptions: Observable<TaxonomyCountry[]>;
    constructor() { }

    selectFilter(item) {
        const selectedItem = item.option.value;
        this.myControl.setValue('');
        selectedItem.pct = '>5%';
        this.selectedItems.push(selectedItem);

    }

    ngOnInit() {
        const testCountry1 = new TaxonomyCountry();
        testCountry1.name = 'Test 1';
        testCountry1.id = 1;
        const testCountry2 = new TaxonomyCountry();
        testCountry2.name = 'Test 2';
        testCountry2.id = 2;
        this.options = [testCountry1, testCountry2];
        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    private _filter(value: string | TaxonomyCountry): TaxonomyCountry[] {
        if (typeof(value) === 'string') {
            const filterValue = value.toLowerCase();
            return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
        }
    }
}
