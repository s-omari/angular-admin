import { Component, OnInit , ViewChild , EventEmitter , Output} from '@angular/core';

import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import {UsersService} from '../users.service';


@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  displayedColumns = [ 'id', 'name', 'username',   'active'  ];
  data: any;
  dataSource: MatTableDataSource<IUser>;

  selectedRowId: number = -1;
  

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Output() private onSelect = new EventEmitter();

  constructor(private UsersService: UsersService) { 

        const users: IUser[] = this.UsersService.getData();
    
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);

  }

   /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  SelectItem(item) {
    this.onSelect.emit(item);
  }
  
  
  highlight(row){
      this.selectedRowId = row.id;
  }

  ngOnInit() {
  }

}


export interface IUser {
  id: number;
  firstName: string;
  lastName: string ;
  username: string;
  email:string ;
  age: number;
  active: boolean;
}