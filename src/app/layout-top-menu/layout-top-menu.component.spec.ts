import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTopMenuComponent } from './layout-top-menu.component';

describe('LayoutTopMenuComponent', () => {
  let component: LayoutTopMenuComponent;
  let fixture: ComponentFixture<LayoutTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
