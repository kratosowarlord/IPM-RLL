import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueansComponent } from './queans.component';

describe('QueansComponent', () => {
  let component: QueansComponent;
  let fixture: ComponentFixture<QueansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
