import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopsNotFoundComponent } from './oops-not-found.component';

describe('OopsNotFoundComponent', () => {
  let component: OopsNotFoundComponent;
  let fixture: ComponentFixture<OopsNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OopsNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OopsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
