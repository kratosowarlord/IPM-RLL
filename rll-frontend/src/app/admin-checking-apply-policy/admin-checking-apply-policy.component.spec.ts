import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCheckingApplyPolicyComponent } from './admin-checking-apply-policy.component';

describe('AdminCheckingApplyPolicyComponent', () => {
  let component: AdminCheckingApplyPolicyComponent;
  let fixture: ComponentFixture<AdminCheckingApplyPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCheckingApplyPolicyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCheckingApplyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
