import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesIdPageComponent } from './detalles-id-page.component';

describe('DetallesIdPageComponent', () => {
  let component: DetallesIdPageComponent;
  let fixture: ComponentFixture<DetallesIdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesIdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesIdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
