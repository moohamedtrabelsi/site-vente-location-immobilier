import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiposerComponent } from './diposer.component';

describe('DiposerComponent', () => {
  let component: DiposerComponent;
  let fixture: ComponentFixture<DiposerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiposerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
