import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {IUser} from './user';
import { HttpClient }   from '@angular/common/http';

@Injectable()
export class DashboardService {

    constructor(private http: HttpClient) { }
    
    postUser(user): Observable<any>{
        return this.http.post<IUser>('http://localhost:3000/api/v1/user/', {user});
    }

}