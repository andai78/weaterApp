import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { City } from '../city';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = '8cc3c8884452338cb80849d7bc36a91a';

@Injectable()
export class ApiService {

  cities:City[] = [];

  constructor(private _http:Http) { }

  getCity(){
    return this.cities;
  }

  searchCity(name:string){
    return this._http.get(`${URL}?q=${name}&appid=${APPID}`) 
  }

  addCityWidget(c:City){
    this.cities.push(c);
  }

  deleteCityWidget(c:City){
      this.cities.splice(this.cities.indexOf(c), 1);
  }

}
