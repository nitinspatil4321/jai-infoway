import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComapnyservicesComponent } from './comapnyservices.component';

describe('ComapnyservicesComponent', () => {
  let component: ComapnyservicesComponent;
  let fixture: ComponentFixture<ComapnyservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComapnyservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComapnyservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
