import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
    return this.http.get('https://www.jsonblob.com/api/jsonblob/16b235cd-3aaa-11e9-9959-f3b7e51e4674');
  }

  GetWeatherData():Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=4f595d63c4c28d20e751f2d2a9bbf814');
  }
}
