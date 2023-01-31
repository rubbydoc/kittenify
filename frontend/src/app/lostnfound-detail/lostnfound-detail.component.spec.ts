import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostnfoundDetailComponent } from './lostnfound-detail.component';

describe('LostnfoundDetailComponent', () => {
  let component: LostnfoundDetailComponent;
  let fixture: ComponentFixture<LostnfoundDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostnfoundDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostnfoundDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
