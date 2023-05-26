import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-kabaadi',
  templateUrl: './kabaadi.component.html',
  styleUrls: ['./kabaadi.component.css']
})

export class KabaadiComponent {
  kabaadi: any;
  kabaadiplayerA:any;
  kabaadiplayerB:any;
  constructor(private apiservice: ApiserviceService) { }
  ngOnInit() {
    this.apiservice.kabaadiscore().subscribe((res: any) => {
      this.kabaadi = res;
      console.log(res);
    });
    {
      this.apiservice.kabaadiplayerA().subscribe((res: any) => {
        this.kabaadiplayerA = res;
        console.log(this.kabaadiplayerA)});
      }
      {
        this.apiservice.kabaadiplayerB().subscribe((res: any) => {
          this.kabaadiplayerB = res;
          console.log(this.kabaadiplayerB)});
        }
  }
}



