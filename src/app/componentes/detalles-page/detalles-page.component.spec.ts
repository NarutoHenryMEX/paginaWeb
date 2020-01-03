import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPageComponent } from './detalles-page.component';

describe('DetallesPageComponent', () => {
  let component: DetallesPageComponent;
  let fixture: ComponentFixture<DetallesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
