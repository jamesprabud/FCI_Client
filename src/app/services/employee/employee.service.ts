import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { ConfigurationService } from '../configuration/configuration.service';
import { SecureHttpClient } from '../secure-http-client/secure-http-client';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private secureHttpClient: SecureHttpClient, private configurationService: ConfigurationService, private httpClient: HttpClient) { }

  getCountries(country: string): Observable<any[]> {
    let apiUrl = this.configurationService.getApiUrl();
    return this.secureHttpClient.get(apiUrl + country); // 'http://universities.hipolabs.com/search?country=India'
    // return this.httpClient.get<any[]>(apiUrl + 'India')
    // return this.httpClient.get<any[]>('http://universities.hipolabs.com/search?country=India')
    // return this.secureHttpClient.get('http://universities.hipolabs.com/search?country=India');

  }

  getEmployees():Employee[] {
      return [
        {
          id: 1,
          firstname: 'Mellie',
          lastname: 'Gabbott',
          email: 'mgabbott0@indiatimes.com',
          gender: 'Female',
          department: 'Support',
          jobtitle: 'Support Analyst',
          project: { name: 'project1', id: 1 },
        },
        {
          id: 2,
          firstname: 'Yehudi',
          lastname: 'Ainsby',
          email: 'yainsby1@w3.org',
          gender: 'Female',
          department: 'Support',
          jobtitle: 'Support Analyst',
          project: { name: 'project2', id: 2 },
        },
        {
          id: 3,
          firstname: 'Noellyn',
          lastname: 'Primett',
          email: 'nprimett2@ning.com',
          gender: 'Female',
          department: 'Human Resources',
          jobtitle: 'Project Manager',
          project: { name: 'project3', id: 3 },
        },
        {
          id: 4,
          firstname: 'Stefanie',
          lastname: 'Yurenin',
          email: 'syurenin3@boston.com',
          gender: 'Female',
          department: 'Marketing',
          jobtitle: 'Senior officer',
          project: { name: 'project4', id: 4 },
        },
        {
          id: 5,
          firstname: 'Stormi',
          lastname: "O'Lunny",
          email: 'solunny4@patch.com',
          gender: 'Female',
          department: 'Engineering',
          jobtitle: 'Software Engineer',
          project: { name: 'project5', id: 5 },
        },
        {
          id: 6,
          firstname: 'Keelia',
          lastname: 'Giraudy',
          email: 'kgiraudy5@nba.com',
          gender: 'Male',
          department: 'Marketing',
          jobtitle: 'Senior officer',
          project: { name: 'project6', id: 6 },
        },
        {
          id: 7,
          firstname: 'Ikey',
          lastname: 'Laight',
          email: 'ilaight6@wiley.com',
          gender: 'Male',
          department: 'Support',
          jobtitle: 'Support Analyst',
          project: { name: 'project7', id: 7 },
        },
        {
          id: 8,
          firstname: 'Adrianna',
          lastname: 'Ruddom',
          email: 'aruddom7@seattletimes.com',
          gender: 'Male',
          department: 'Marketing',
          jobtitle: 'Senior officer',
          project: { name: 'project8', id: 8 },
        },
        {
          id: 9,
          firstname: 'Dionysus',
          lastname: 'McCory',
          email: 'dmccory8@ox.ac.uk',
          gender: 'Male',
          department: 'Engineering',
          jobtitle: 'Software Engineer',
          project: { name: 'project9', id: 9 },
        },
        {
          id: 10,
          firstname: 'Claybourne',
          lastname: 'Shellard',
          email: 'cshellard9@rediff.com',
          gender: 'Male',
          department: 'Engineering',
          jobtitle: 'Software Engineer',
          project: { name: 'project10', id: 10 },
        },
      ];
  }
}
