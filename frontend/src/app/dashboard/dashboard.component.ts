import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string;
  emailId: string;
  follower: string;

  constructor(private dashboardservice: DashboardService) { }

  ngOnInit() {
  }
  submit(){
    
    let obj = {
      "Name" : this.name,
      "EmailId": this.emailId,
      "Follower": this.follower,
    }
    console.log(obj);
    this.dashboardservice.postUser(obj).subscribe(data => {
     
      console.log(data);
    })

  }
}
