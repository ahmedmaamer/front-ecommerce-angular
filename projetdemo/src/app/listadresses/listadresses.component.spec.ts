import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadressesComponent } from './listadresses.component';

describe('ListadressesComponent', () => {
  let component: ListadressesComponent;
  let fixture: ComponentFixture<ListadressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadressesComponent]
    });
    fixture = TestBed.createComponent(ListadressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
