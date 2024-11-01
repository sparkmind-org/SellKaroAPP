import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../services/advertisement.service';


@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.page.html',
  styleUrls: ['./mobile-phone.page.scss'],
})
export class MobilePhonePage implements OnInit {
  ads: any[] = [];

  constructor(private adService: AdvertisementService) { }

  ngOnInit() {
    this.adService.getAds().subscribe((data) => {
      this.ads = data;
    });

  }

}
