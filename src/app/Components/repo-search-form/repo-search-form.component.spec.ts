import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoSearchFormComponent } from './repo-search-form.component';

describe('RepoSearchFormComponent', () => {
  let component: RepoSearchFormComponent;
  let fixture: ComponentFixture<RepoSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
