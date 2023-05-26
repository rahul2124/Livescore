import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css']
})
export class CricketComponent {
  cricketscore: any = [];
  cricket: any = [];
  public score2 = "";
  public department2 = "";
  spinner = false;
  cricketplayer: any;
  cricketplayerb: any;
  constructor(private http: HttpClient, private apiservice: ApiserviceService) { }
  ngOnInit() {
    this.apiservice.cricketscore().subscribe((res: any) => {
      this.cricket = res;
      console.log(this.cricket);

    });
    this.apiservice.cricketplayer().subscribe((res: any) => {
      this.cricketplayer = res;
      console.log(this.cricketplayer);
    });
    this.apiservice.cricketplayerb().subscribe((res: any) => {
      this.cricketplayerb = res;
      console.log(this.cricketplayerb);
    })
  }
}
