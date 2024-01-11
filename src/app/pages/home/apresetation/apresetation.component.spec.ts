import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresetationComponent } from './apresetation.component';

describe('ApresetationComponent', () => {
  let component: ApresetationComponent;
  let fixture: ComponentFixture<ApresetationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApresetationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApresetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
