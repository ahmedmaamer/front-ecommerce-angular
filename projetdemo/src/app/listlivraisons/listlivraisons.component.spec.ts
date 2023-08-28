import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlivraisonsComponent } from './listlivraisons.component';

describe('ListlivraisonsComponent', () => {
  let component: ListlivraisonsComponent;
  let fixture: ComponentFixture<ListlivraisonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListlivraisonsComponent]
    });
    fixture = TestBed.createComponent(ListlivraisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
