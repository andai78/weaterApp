import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  name: string = '';
  city:City;
  showMsg:Boolean = false;

  constructor(private formBuilder:FormBuilder, private _apiServ:ApiService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ''
    });
  }

  search(){
    this._apiServ.searchCity(this.name).subscribe(
      resp => {
        this.city = new City(resp.json().name, resp.json().main.temp)
      },
      error => {
        console.log(error)
      },
      () => {
        this._apiServ.addCityWidget(this.city);
      }
    );
  
  }


}
