import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilePhonePage } from './mobile-phone.page';

describe('MobilePhonePage', () => {
  let component: MobilePhonePage;
  let fixture: ComponentFixture<MobilePhonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
