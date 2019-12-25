import { Component, OnInit, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: '[app-language-section]',
  templateUrl: './language-section.component.html',
  styleUrls: ['./language-section.component.scss']
})
export class LanguageSectionComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  modelForm: FormGroup;
  constructor(

    private fb: FormBuilder,
  ) { }

  ngOnInit() {

    this.modelForm = this.fb.group({
        title: [[], [Validators.required]],
    });



    let params = new HttpParams();
    params = params.append('var1', 'val1');
    params = params.append('var1', 'val11');
    params = params.append('var2', 'val2');
    console.log(params.toString());
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  selected(item: MatAutocompleteSelectedEvent ) {
    console.log(item.option.value);
  }
}
