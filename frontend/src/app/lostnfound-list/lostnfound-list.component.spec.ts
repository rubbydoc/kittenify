import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostnfoundListComponent } from './lostnfound-list.component';

describe('LostnfoundListComponent', () => {
  let component: LostnfoundListComponent;
  let fixture: ComponentFixture<LostnfoundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LostnfoundListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LostnfoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
