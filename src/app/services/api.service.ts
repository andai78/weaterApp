import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { City } from '../city';

@Injectable()
export class ApiService {

  data:any;
  cities:City[] = [
   new City ("London",20,"biyziz  zriiz"), new City ("Paris",25,"biyziz  zriiz"), new City ("Kinshasa",32,"biyziz  zriiz")
  ]

  constructor(private _http:Http) { }

  getCity(){
      /*return this._http.get('http://samples.openweathermap.org/data/2.5/weather?q=Paris&appid=8cc3c8884452338cb80849d7bc36a91a')
      .map(response => response.json())
      .catch(error => {
        console.error(error);
        return Observable.throw(error.json())
    });*/
    console.log(this.cities);
      return this.cities;
  }

  addCityWidget(c:City){
    this.cities.push(c);
  }

}
