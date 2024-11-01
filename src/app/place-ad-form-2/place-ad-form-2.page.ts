import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdvertisementService } from '../services/advertisement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-ad-form-2',
  templateUrl: './place-ad-form-2.page.html',
  styleUrls: ['./place-ad-form-2.page.scss'],
})
export class PlaceAdForm2Page implements OnInit {

  adFormStep2!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adService: AdvertisementService,
    private router: Router
  ) { }

  ngOnInit() {
    this.adFormStep2 = this.fb.group({
      accompaniments: ['', Validators.required],
      condition: ['', Validators.required],
      damagesondevices: [''],
      version: ['', Validators.required],
      storagecapacity: ['', Validators.required],
      postedon: ['', Validators.required],
      color: ['', Validators.required],
      country: ['', Validators.required],
      warranty: [''],
      seller: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.adFormStep2.valid) {
      // Retrieve the data from Step 1 stored in localStorage
      const step1Data = JSON.parse(localStorage.getItem('adFormStep1') || '{}');
      const fullAdData = { ...step1Data, ...this.adFormStep2.value };

      // Send the full ad data to the backend (db.json)
      this.adService.createAd(fullAdData).subscribe(() => {
        // Navigate to the mobile-phone listing page once the ad is submitted
        this.router.navigate(['/mobile-phone']);
      });
    }
  }

}
