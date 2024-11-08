import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ad {
  id: string; // Assuming IDs are strings for consistency with backend IDs
  title: string;
  subtitle?: string;
  brand: string;
  model?: string;
  price: string;
  pictures: string[]; // Array of image URLs
  firstImageUrl?: string; // Only the first image for summaries
  accompaniments?: string;
  condition?: string;
  damagesondevices?: string;
  version?: string;
  storagecapacity?: string;
  postedon?: string;
  color?: string;
  country?: string;
  warranty?: string;
  location?: string;
  seller?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  // Fetch product summaries with only the first image included
  getAds(): Observable<Ad[]> {
    return this.http.get<Ad[]>(`${this.apiUrl}/summaries`);
  }

  // Fetch detailed product information by ID
  getAdById(id: string): Observable<Ad> {
    return this.http.get<Ad>(`${this.apiUrl}/${id}`);
  }

  // Create a new product (for future use if needed)
  createAd(ad: Ad): Observable<Ad> {
    return this.http.post<Ad>(this.apiUrl, ad);
  }
}
