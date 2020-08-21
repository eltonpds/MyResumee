import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivityComponent } from './responsivity.component';

describe('ResponsivityComponent', () => {
  let component: ResponsivityComponent;
  let fixture: ComponentFixture<ResponsivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
