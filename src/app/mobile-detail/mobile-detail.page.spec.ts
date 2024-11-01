import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileDetailPage } from './mobile-detail.page';

describe('MobileDetailPage', () => {
  let component: MobileDetailPage;
  let fixture: ComponentFixture<MobileDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
