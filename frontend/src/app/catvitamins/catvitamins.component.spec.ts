import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatvitaminsComponent } from './catvitamins.component';

describe('CatvitaminsComponent', () => {
  let component: CatvitaminsComponent;
  let fixture: ComponentFixture<CatvitaminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatvitaminsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatvitaminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
