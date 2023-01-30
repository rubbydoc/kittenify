import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehomeFormComponent } from './rehome-form.component';

describe('RehomeFormComponent', () => {
  let component: RehomeFormComponent;
  let fixture: ComponentFixture<RehomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehomeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RehomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
