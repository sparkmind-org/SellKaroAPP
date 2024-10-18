import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-phone',
  templateUrl: './mobile-phone.page.html',
  styleUrls: ['./mobile-phone.page.scss'],
})
export class MobilePhonePage implements OnInit {

  constructor() { }
  products = [
    {
      id: 1,
      name: 'Mobile Phones: Apple',
      description: 'Apple iPhone 13 Pro Max, Age: 2 Years',
      location: 'Pimpri-Chinchwad',
      price: 80000,
      image: 'assets/iphone.svg', // Replace with the actual path to your image
      verified: true,
      premium: true,
    },
    {
      id: 2,
      name: 'Mobile Phones: Apple',
      description: 'Apple iPhone 13 Pro Max, Age: 2 Years',
      location: 'Pimpri-Chinchwad',
      price: 80000,
      image: 'assets/iphone.svg',
      verified: true,
      premium: true,
    },
    {
      id: 3,
      name: 'Mobile Phones: Apple',
      description: 'Apple iPhone 13 Pro Max, Age: 2 Years',
      location: 'Pimpri-Chinchwad',
      price: 80000,
      image: 'assets/iphone.svg',
      verified: true,
      premium: true,
    },
  ];

  ngOnInit() {
    return;
  }

}
