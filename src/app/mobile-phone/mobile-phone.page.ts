import { Component, OnInit } from '@angular/core';
import { AdvertisementService, Ad } from '../services/advertisement.service';

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.page.html',
  styleUrls: ['./mobile-phone.page.scss'],
})
export class MobilePhonePage implements OnInit {
  ads: Ad[] = [];
  filteredAds: Ad[] = [];
  isLoading = true;
  errorMessage: string | null = null;

  constructor(private adService: AdvertisementService) {}

  ngOnInit() {
    this.loadAds();
  }

  // Method to load ads and handle loading state and errors
  loadAds() {
    this.isLoading = true;
    this.adService.getAds().subscribe({
      next: (data) => {
        this.ads = data;
        this.filteredAds = data; // Initialize filtered ads
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading ads:', error);
        this.errorMessage = 'Failed to load ads. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  // Method to filter ads for search functionality
  filterAds(searchTerm: string) {
    this.filteredAds = this.ads.filter(ad => 
      ad.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
