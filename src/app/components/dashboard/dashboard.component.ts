import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  // public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // public dataSource1 =[
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // ];
  // public dataSource: MatTableDataSource<any>;

// For Employee data
  // displayedColumns: string[] = [
  //   'id',
  //   'firstname',
  //   'lastname',
  //   'email',
  //   'gender',
  //   'jobtitle',
  //   'department',
  // ];

  // For University data
  displayedColumns: string[] = [
    'name',
    'domains',
    'web_pages',
    'state-province',
    'country',

  ];

  EmpData: Employee[] = [];
  // EmpData: Employee[] = [
  //   {
  //     id: 1,
  //     firstname: 'Mellie',
  //     lastname: 'Gabbott',
  //     email: 'mgabbott0@indiatimes.com',
  //     gender: 'Female',
  //     department: 'Support',
  //     jobtitle: 'Support Analyst',
  //     project: { name: 'project1', id: 1 },
  //   },
  //   {
  //     id: 2,
  //     firstname: 'Yehudi',
  //     lastname: 'Ainsby',
  //     email: 'yainsby1@w3.org',
  //     gender: 'Female',
  //     department: 'Support',
  //     jobtitle: 'Support Analyst',
  //     project: { name: 'project2', id: 2 },
  //   },
  //   {
  //     id: 3,
  //     firstname: 'Noellyn',
  //     lastname: 'Primett',
  //     email: 'nprimett2@ning.com',
  //     gender: 'Female',
  //     department: 'Human Resources',
  //     jobtitle: 'Project Manager',
  //     project: { name: 'project3', id: 3 },
  //   },
  //   {
  //     id: 4,
  //     firstname: 'Stefanie',
  //     lastname: 'Yurenin',
  //     email: 'syurenin3@boston.com',
  //     gender: 'Female',
  //     department: 'Marketing',
  //     jobtitle: 'Senior officer',
  //     project: { name: 'project4', id: 4 },
  //   },
  //   {
  //     id: 5,
  //     firstname: 'Stormi',
  //     lastname: "O'Lunny",
  //     email: 'solunny4@patch.com',
  //     gender: 'Female',
  //     department: 'Engineering',
  //     jobtitle: 'Software Engineer',
  //     project: { name: 'project5', id: 5 },
  //   },
  //   {
  //     id: 6,
  //     firstname: 'Keelia',
  //     lastname: 'Giraudy',
  //     email: 'kgiraudy5@nba.com',
  //     gender: 'Male',
  //     department: 'Marketing',
  //     jobtitle: 'Senior officer',
  //     project: { name: 'project6', id: 6 },
  //   },
  //   {
  //     id: 7,
  //     firstname: 'Ikey',
  //     lastname: 'Laight',
  //     email: 'ilaight6@wiley.com',
  //     gender: 'Male',
  //     department: 'Support',
  //     jobtitle: 'Support Analyst',
  //     project: { name: 'project7', id: 7 },
  //   },
  //   {
  //     id: 8,
  //     firstname: 'Adrianna',
  //     lastname: 'Ruddom',
  //     email: 'aruddom7@seattletimes.com',
  //     gender: 'Male',
  //     department: 'Marketing',
  //     jobtitle: 'Senior officer',
  //     project: { name: 'project8', id: 8 },
  //   },
  //   {
  //     id: 9,
  //     firstname: 'Dionysus',
  //     lastname: 'McCory',
  //     email: 'dmccory8@ox.ac.uk',
  //     gender: 'Male',
  //     department: 'Engineering',
  //     jobtitle: 'Software Engineer',
  //     project: { name: 'project9', id: 9 },
  //   },
  //   {
  //     id: 10,
  //     firstname: 'Claybourne',
  //     lastname: 'Shellard',
  //     email: 'cshellard9@rediff.com',
  //     gender: 'Male',
  //     department: 'Engineering',
  //     jobtitle: 'Software Engineer',
  //     project: { name: 'project10', id: 10 },
  //   },
  // ];

  dataSource = new MatTableDataSource(this.EmpData);
  constructor(employeeService: EmployeeService) {
    let countries: any[];
    // this.dataSource = new MatTableDataSource<any>();
    // For University data
    employeeService.getCountries('India').subscribe((result: any[]) => {
      countries = result;
      // console.log('countries', countries)
      // console.log('countries', countries.filter(x=> x["state-province"] === 'Tamil Nadu'))
      this.dataSource = new MatTableDataSource(countries.filter(x=> x["state-province"] === 'Tamil Nadu'));
     });
    // For Employee data
    // this.EmpData = employeeService.getEmployees();
    // this.dataSource = new MatTableDataSource(this.EmpData);
   }

  ngOnInit(): void {
  }

}
