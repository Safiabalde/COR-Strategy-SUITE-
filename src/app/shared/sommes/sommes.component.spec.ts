import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommesComponent } from './sommes.component';

describe('SommesComponent', () => {
  let component: SommesComponent;
  let fixture: ComponentFixture<SommesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SommesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SommesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
