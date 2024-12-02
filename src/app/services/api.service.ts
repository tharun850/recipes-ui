import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private baseUrl = environment.baseUrl;
  private fetchAllUrl = environment.fetchAllUrl;
  private fetchSearchQueryUrl = environment.fetchSearchQueryUrl;

  constructor(private http: HttpClient) {}

  searchRecipes(searchText: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${this.baseUrl}/${this.fetchSearchQueryUrl}?query=${searchText}`);
  }

  getAllRecipes(): Observable<Response[]> {
    console.log(`${this.apiUrl}/${this.baseUrl}/${this.fetchAllUrl}`);
    return this.http.get<Response[]>(`${this.apiUrl}/${this.baseUrl}/${this.fetchAllUrl}`);
  }
}