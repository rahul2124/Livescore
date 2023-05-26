import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})
export class FootballComponent {

  football: any = [];
  public score2 = " ";
  public teamB ="";
  public player2 = "";
  Team2: any = [];
  spinner = false;
  footballplayerA: any;
  footballplayerB: any;
  constructor(private http: HttpClient, private apiservice: ApiserviceService) { }
  ngOnInit() {
    this.apiservice.footballscore().subscribe((res: any) => {
      this.football = res;
      console.log(res);
    });
    this.apiservice.footballplayerA().subscribe((res: any) => {
      this.footballplayerA = res;
      console.log(this .footballplayerA);
    });
    this.apiservice.footballplayerB().subscribe((res: any) => {
      this.footballplayerB = res;
      console.log(this.footballplayerB);
    })

}
}
