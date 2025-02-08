import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { enviroment } from 'src/enviroment/enviroment';


@Injectable({
  providedIn: 'root'
})

export class FastForexService {

  constructor(private http: HttpClient) { }

  getExchangeRate(from: string, to: string){
    return this.http.get(`${enviroment.fastfores.apiUrl}/fetch-one?from${from}&to=${to}&api_key=${enviroment.fastfores.apikey}`);
  }

  getCurrencies(){
    return this.http.get(`${enviroment.fastfores.apiUrl}/currencies?api_key=${enviroment.fastfores.apikey}`);
  }

}
