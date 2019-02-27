import { Component, OnInit } from '@angular/core';
import { DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  students:any = [];
  weather:any = [];
  temp:any = [];

  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.GetStudentData().subscribe((data)=>{
      this.students = data.students;
    }); // Asyncrhonus method

    this.dataService.GetWeatherData().subscribe((data)=>{
      this.weather = data.weather;
      this.temp = data.main;
    });

  }
}
