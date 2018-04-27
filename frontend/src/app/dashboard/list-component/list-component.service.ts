import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {IUser} from '../user';
import { HttpClient }   from '@angular/common/http';

@Injectable()
export class ListComponentService {

    constructor(private http: HttpClient) { }
    
    getList(): Observable<any>{
        return this.http.get<IUser>('http://localhost:3000/api/v1/user/list');
    }

}