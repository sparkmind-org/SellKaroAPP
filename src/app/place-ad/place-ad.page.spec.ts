import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaceAdPage } from './place-ad.page';

describe('PlaceAdPage', () => {
  let component: PlaceAdPage;
  let fixture: ComponentFixture<PlaceAdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
