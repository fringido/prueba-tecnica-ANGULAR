import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contry } from '../models/contrys';

@Injectable({
  providedIn: 'root'
})
export class ContrysService {

  private http = inject(HttpClient);

  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags';

  getContrys(): Observable<Contry[]> {
    return this.http.get<Contry[]>(this.apiUrl);
  }
}
