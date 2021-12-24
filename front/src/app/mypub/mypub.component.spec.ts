import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypubComponent } from './mypub.component';

describe('MypubComponent', () => {
  let component: MypubComponent;
  let fixture: ComponentFixture<MypubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
