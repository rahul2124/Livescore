import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  constructor(private http: HttpClient) { }
  cricketscore() {
    return this.http.get('https://localhost:44327/api/cricket')
  }
  cricketplayer() {
    return this.http.get('https://localhost:44327/api/cricketplayer')
  }
  cricketplayerb() {
    return this.http.get('https://localhost:44327/api/cricketplayerB')
  }


  kabaadiscore(){
    return this.http.get('https://localhost:44327/api/kabaddi')
  }
  kabaadiplayerA(){
    return this.http.get('https://localhost:44327/api/kabaddiplayerA')
  }
  kabaadiplayerB(){
    return this.http.get('https://localhost:44327/api/kabaddiplayerB')
  }


  footballscore(){
    return this.http.get('https://localhost:44327/api/football')
  }
  footballplayerA(){
    return this.http.get('https://localhost:44327/api/footballplayerA')
  } 
  footballplayerB(){
    return this.http.get('https://localhost:44327/api/footballplayerB')
  }
}
