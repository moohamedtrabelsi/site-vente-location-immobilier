import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListfavComponent } from './listfav.component';

describe('ListfavComponent', () => {
  let component: ListfavComponent;
  let fixture: ComponentFixture<ListfavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListfavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
