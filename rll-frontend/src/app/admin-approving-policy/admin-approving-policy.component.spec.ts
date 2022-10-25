import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApprovingPolicyComponent } from './admin-approving-policy.component';

describe('AdminApprovingPolicyComponent', () => {
  let component: AdminApprovingPolicyComponent;
  let fixture: ComponentFixture<AdminApprovingPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminApprovingPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminApprovingPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
