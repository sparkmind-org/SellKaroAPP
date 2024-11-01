import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceAdForm2Page } from './place-ad-form-2.page';

describe('PlaceAdForm2Page', () => {
  let component: PlaceAdForm2Page;
  let fixture: ComponentFixture<PlaceAdForm2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAdForm2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
