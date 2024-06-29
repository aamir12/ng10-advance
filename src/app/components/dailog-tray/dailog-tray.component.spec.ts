import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogTrayComponent } from './dailog-tray.component';

describe('DailogTrayComponent', () => {
  let component: DailogTrayComponent;
  let fixture: ComponentFixture<DailogTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailogTrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
