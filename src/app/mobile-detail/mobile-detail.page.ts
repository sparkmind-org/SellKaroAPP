import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementService, Ad } from '../services/advertisement.service';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.page.html',
  styleUrls: ['./mobile-detail.page.scss'],
})
export class MobileDetailPage implements OnInit {
  ad: Ad | undefined;
  currentImageIndex: number = 0;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private adService: AdvertisementService
  ) {}

  ngOnInit() {
    // Step 1: Log the entire route snapshot to understand what’s happening
    console.log('Route snapshot:', this.route.snapshot);

    // Step 2: Attempt to retrieve the `id` parameter
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Ad ID from route:', id); // Track the ID value

    // Step 3: Ensure the `id` is not undefined and make service call if available
    if (id) {
      this.adService.getAdById(id).subscribe({
        next: (data) => {
          console.log('Ad data fetched:', data); // Track fetched data
          this.ad = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error fetching ad:', error); // Log error if fetching fails
          this.loading = false;
        }
      });
    } else {
      console.error('Invalid or missing ID in route');
      this.loading = false;
    }
  }

  previousImage() {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  nextImage() {
    if (this.ad && this.currentImageIndex < this.ad.pictures.length - 1) {
      this.currentImageIndex++;
    }
  }
}
