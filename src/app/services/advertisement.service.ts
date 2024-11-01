import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private apiUrl = 'http://localhost:3000/ads';

  constructor(private http: HttpClient) { }
  getAds(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Post a new ad
  createAd(ad: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, ad);
  }

  // Get ad by ID
  getAdById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}

