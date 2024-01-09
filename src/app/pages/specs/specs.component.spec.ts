import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsComponent } from './specs.component';

describe('SpecsComponent', () => {
  let component: SpecsComponent;
  let fixture: ComponentFixture<SpecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
