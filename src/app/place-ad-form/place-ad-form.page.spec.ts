import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceAdFormPage } from './place-ad-form.page';

describe('PlaceAdFormPage', () => {
  let component: PlaceAdFormPage;
  let fixture: ComponentFixture<PlaceAdFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAdFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
