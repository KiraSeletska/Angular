import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendExperianceComponent } from './frontend-experiance.component';

describe('FrontendExperianceComponent', () => {
  let component: FrontendExperianceComponent;
  let fixture: ComponentFixture<FrontendExperianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendExperianceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrontendExperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
