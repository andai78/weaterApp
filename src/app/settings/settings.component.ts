import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from '../services/api.service';

import { City } from '../city';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder:FormBuilder, private _apiServ:ApiService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      temperature: 0,
      description: ''
    });
  }

  addCity(){
    const newItem = new City(this.form.value.name, this.form.value.temperature, this.form.value.description);
    this._apiServ.addCityWidget(newItem);
    console.log(this.form.value);
  }

}
