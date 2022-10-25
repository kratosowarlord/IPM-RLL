import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueansAdminComponent } from './queans-admin.component';

describe('QueansAdminComponent', () => {
  let component: QueansAdminComponent;
  let fixture: ComponentFixture<QueansAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueansAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueansAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
