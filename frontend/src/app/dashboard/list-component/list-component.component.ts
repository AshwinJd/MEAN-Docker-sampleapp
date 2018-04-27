import { Component, OnInit } from '@angular/core';
import { ListComponentService } from './list-component.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { IUser } from '../user';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  userList: any;
  displayedColumns = ['Name', 'EmailId', 'Follower'];

  constructor(private listservice: ListComponentService) { }
  dataSource: MatTableDataSource<IUser>;

  ngOnInit() {
    this.listservice.getList().subscribe(data => {
      if (data.length !== 0) {

        this.userList = data;
        console.log(this.userList);
        this.dataSource = new MatTableDataSource(this.userList);
      } else {
        this.userList = null;
      }

    })
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
