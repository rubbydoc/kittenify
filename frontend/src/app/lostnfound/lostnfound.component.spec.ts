import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostnfoundComponent } from './lostnfound.component';

describe('LostnfoundComponent', () => {
  let component: LostnfoundComponent;
  let fixture: ComponentFixture<LostnfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostnfoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostnfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
