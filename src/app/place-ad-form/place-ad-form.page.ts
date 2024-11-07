import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-place-ad-form',
  templateUrl: './place-ad-form.page.html',
  styleUrls: ['./place-ad-form.page.scss'],
})
export class PlaceAdFormPage {

  adForm: FormGroup;
  images: string[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.adForm = this.fb.group({
      location: ['', Validators.required],
      mobileType: ['', Validators.required],
      brand: ['', Validators.required],
      addTitle: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      pictures: [[]],  // To store an array of images
    });
   }

   onSubmit() {
        if( this.adForm.valid){
    // Store form data in localStorage or service for multi-step form
    localStorage.setItem('adFormStep1', JSON.stringify(this.adForm.value));
    this.router.navigate(['/place-ad-form-2']);
  }
}
  // onFileChange(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input?.files?.length) {
  //     const file = input.files[0];
  //     this.adForm.patchValue({ pictures: file });
  //   }
  // }

  onMultipleFilesChange(event: any) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      this.images = [];  // Clear previous images
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push(e.target.result);  // Store Base64 string
          this.adForm.patchValue({ pictures: this.images });  // Update form control
        };
        reader.readAsDataURL(file);  // Convert file to Base64
      });
    }
  }
  // onFileChange(event: any) {
  //   const file = (event.target as HTMLInputElement).files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       this.adForm.patchValue({
  //         pictures: reader.result // Store the Base64 string of the image
  //       });
  //     };
  //     reader.readAsDataURL(file); // Convert the image file to Base64
  //   }
  // }



}
