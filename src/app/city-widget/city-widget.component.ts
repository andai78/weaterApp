import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

import { City } from '../city';

@Component({
  selector: 'app-city-widget',
  templateUrl: './city-widget.component.html',
  styleUrls: ['./city-widget.component.css']
})
export class CityWidgetComponent implements OnInit {

  constructor(private _apiServ:ApiService) { }

  cities:City[];

  ngOnInit() {
     this.cities = this._apiServ.getCity()
     //this._apiServ.getCity().subscribe(resp => console.log(resp.json()))
  }

  delete(city){
    this._apiServ.deleteCityWidget(city);
    console.log(city)
  }

}
