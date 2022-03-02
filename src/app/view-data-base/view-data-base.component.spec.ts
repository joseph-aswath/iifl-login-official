import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDataBaseComponent } from './view-data-base.component';

describe('ViewDataBaseComponent', () => {
  let component: ViewDataBaseComponent;
  let fixture: ComponentFixture<ViewDataBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDataBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDataBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
