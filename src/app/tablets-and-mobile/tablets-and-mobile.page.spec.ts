import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabletsAndMobilePage } from './tablets-and-mobile.page';

describe('TabletsAndMobilePage', () => {
  let component: TabletsAndMobilePage;
  let fixture: ComponentFixture<TabletsAndMobilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletsAndMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
