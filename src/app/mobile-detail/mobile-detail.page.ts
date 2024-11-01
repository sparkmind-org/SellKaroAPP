import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertisementService } from '../services/advertisement.service';


@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.page.html',
  styleUrls: ['./mobile-detail.page.scss'],
})
export class MobileDetailPage implements OnInit {
  ad: any;


  constructor(private route: ActivatedRoute, private adService: AdvertisementService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.adService.getAdById(id).subscribe((data) => {
      this.ad = data;
    });
  }

}
