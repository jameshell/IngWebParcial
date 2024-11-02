import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cafe } from '../models/Cafe.model';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  obtenerCafe(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.apiUrl);
  }
}
