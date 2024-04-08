import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousExperianceComponent } from './previous-experiance.component';

describe('PreviousExperianceComponent', () => {
  let component: PreviousExperianceComponent;
  let fixture: ComponentFixture<PreviousExperianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousExperianceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
