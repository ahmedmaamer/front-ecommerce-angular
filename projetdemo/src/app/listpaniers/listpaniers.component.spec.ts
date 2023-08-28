import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpaniersComponent } from './listpaniers.component';

describe('ListpaniersComponent', () => {
  let component: ListpaniersComponent;
  let fixture: ComponentFixture<ListpaniersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpaniersComponent]
    });
    fixture = TestBed.createComponent(ListpaniersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
