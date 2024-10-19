import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private apiUrl = 'http://localhost:3100/ads';

  constructor(private http: HttpClient) {}

  // Method to save ad data
  saveAd(adData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, adData); // FormData contains both text fields and image file
  }

  // Method to get ads data
  getAds(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // Get the list of ads
  }
}
