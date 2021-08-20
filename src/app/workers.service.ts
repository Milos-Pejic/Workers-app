import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  url: string = 'https://interview-mock.herokuapp.com/api/workers';
  constructor(private http:HttpClient) {}

    getWorkers(){
      return this.http.get(this.url);
    };
    getFlight(id:number){
      return this.http.get(`${this.url}/${id}`);
    };
}
