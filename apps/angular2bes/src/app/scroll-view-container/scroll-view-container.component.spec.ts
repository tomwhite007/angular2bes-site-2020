import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollViewContainerComponent } from './scroll-view-container.component';

describe('ScrollViewContainerComponent', () => {
  let component: ScrollViewContainerComponent;
  let fixture: ComponentFixture<ScrollViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
