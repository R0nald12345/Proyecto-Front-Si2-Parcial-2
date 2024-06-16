import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaPageComponent } from './asistencia-page.component';

describe('AsistenciaPageComponent', () => {
  let component: AsistenciaPageComponent;
  let fixture: ComponentFixture<AsistenciaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsistenciaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsistenciaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
