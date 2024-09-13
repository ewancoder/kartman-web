import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveSummaryComponent } from './drive-summary.component';

describe('DriveSummaryComponent', () => {
  let component: DriveSummaryComponent;
  let fixture: ComponentFixture<DriveSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriveSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriveSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
