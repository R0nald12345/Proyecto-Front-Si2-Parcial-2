import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacultadesPageComponent } from './list-facultades-page.component';

describe('ListFacultadesPageComponent', () => {
  let component: ListFacultadesPageComponent;
  let fixture: ComponentFixture<ListFacultadesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListFacultadesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFacultadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
