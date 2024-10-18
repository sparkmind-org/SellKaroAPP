import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileDetailsPage } from './mobile-details.page';

describe('MobileDetailsPage', () => {
  let component: MobileDetailsPage;
  let fixture: ComponentFixture<MobileDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
