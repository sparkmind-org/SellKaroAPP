import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-place-ad-form',
  templateUrl: './place-ad-form.page.html',
  styleUrls: ['./place-ad-form.page.scss'],
})
export class PlaceAdFormPage {

  adForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.adForm = this.fb.group({
      location: [''],
      mobileType: [''],
      brand: [''],
      addTitle: [''],
      description: [''],
      pictures: [null], // File upload
      price: ['']
    });
   }

   onSubmit() {
    // Store form data in localStorage or service for multi-step form
    localStorage.setItem('adFormStep1', JSON.stringify(this.adForm.value));
    this.router.navigate(['/place-ad-form-2']);
  }
  // onFileChange(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input?.files?.length) {
  //     const file = input.files[0];
  //     this.adForm.patchValue({ pictures: file });
  //   }
  // }
  onFileChange(event: any) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.adForm.patchValue({
          pictures: reader.result // Store the Base64 string of the image
        });
      };
      reader.readAsDataURL(file); // Convert the image file to Base64
    }
  }



}
