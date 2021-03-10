import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolGroupComponent } from './idol-group.component';

describe('IdolGroupComponent', () => {
  let component: IdolGroupComponent;
  let fixture: ComponentFixture<IdolGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdolGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdolGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
