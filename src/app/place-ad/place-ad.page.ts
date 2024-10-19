import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdService } from '../service/ad.service'; // Correct the path as needed
import { Router } from '@angular/router';
@Component({
  selector: 'app-place-ad',
  templateUrl: './place-ad.page.html',
  styleUrls: ['./place-ad.page.scss'],
})
export class PlaceAdPage implements OnInit {
  adForm!: FormGroup;
  selectedImage: File | null = null; // To store selected image

  constructor(private fb: FormBuilder, private adService: AdService ,private route: Router) {}

  ngOnInit() {
    this.adForm = this.fb.group({
      location: ['', Validators.required],
      mobileType: ['', Validators.required],
      brand: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  // Capture selected image
  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0]; // Store the file
  }

  onSubmit() {
    if (this.adForm.valid && this.selectedImage) {
      const formData = new FormData();
      formData.append('location', this.adForm.get('location')?.value);
      formData.append('mobileType', this.adForm.get('mobileType')?.value);
      formData.append('brand', this.adForm.get('brand')?.value);
      formData.append('title', this.adForm.get('title')?.value);
      formData.append('description', this.adForm.get('description')?.value);
      formData.append('price', this.adForm.get('price')?.value);
      formData.append('image', this.selectedImage); // Attach the image file

      // Submit the form data
      this.adService.saveAd(formData).subscribe(response => {
        console.log('Ad saved successfully!', response);
        this.adForm.reset();
        this.route.navigate(['/mobile-phone']);
      }, error => {
        console.error('Error saving ad', error);
      });
    } else {
      console.log('Form is invalid or image not selected');
    }
  }
}
