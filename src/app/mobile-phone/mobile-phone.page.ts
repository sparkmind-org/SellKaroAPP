import { Component, OnInit } from '@angular/core';
import { AdService } from '../service/ad.service'; // Correct the path

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.page.html',
  styleUrls: ['./mobile-phone.page.scss'],
})
export class MobilePhonePage implements OnInit {
  products: any[] = [];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    // Fetch the products (ads) from db.json
    this.adService.getAds().subscribe(data => {
      this.products = data; // Populate the products array with fetched data
    }, error => {
      console.error('Error fetching ads', error);
    });
  }
}
